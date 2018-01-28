import 'whatwg-fetch';
import oboe from 'oboe';
import { handleFetchResponse } from "./http";

class TokenStore {
  getToken = () => {
    return localStorage.getItem("token");
  };

  setToken = (token) => {
    localStorage.setItem("token", token.trim());

    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let {id, email} = JSON.parse(window.atob(base64));

    localStorage.setItem("user", id);
    localStorage.setItem("email", email);

    try {
      Raven.setUserContext({ id, email });
    } catch (err) {
    }
  };

  getUser = () => localStorage.getItem("user")

  isMy = (id) => {
    if (id === "my")
      return true;
    return localStorage.getItem("user") === id;
  };

  removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
}

class AuthService {
  constructor() {
    this.tokenStore = new TokenStore();
  }

  withPostOptions = (req) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: JSON.stringify(req)
    };
  };

  doAuth(req, history) {
    return fetch(req).
      then((res) => handleFetchResponse(res)).
      then(authRes => {
        this.tokenStore.setToken(authRes.token);
        history.push("/dashboard/my")
      })
  }

  authWithFacebook(history) {
    let url = `/api/v1/auth/social/facebook${history.location.search}`;
    return this.doAuth(new Request(url, { credentials: 'same-origin' }), history);
  }

  signUp(req, history) {
    let url = `/api/v1/auth/register`;
    let options = this.withPostOptions(req);
    return this.doAuth(new Request(url, options), history);
  }

  login(req, history) {
    let url = `/api/v1/auth/logIn`;
    let options = this.withPostOptions(req);
    return this.doAuth(new Request(url, options), history);
  }

  forgot(req) {
    let url = `/api/v1/auth/password/forgot`;
    let options = this.withPostOptions(req);
    return fetch(new Request(url, options)).
      then(handleFetchResponse);
  }

  reset(req, token, history) {
    let url = `/api/v1/auth/password/reset/${token}`;
    let options = this.withPostOptions(req);
    return this.doAuth(new Request(url, options), history);
  }

  restoreAuthentication = () => {
    let token = this.tokenStore.getToken();
    if (token !== undefined && token !== null) {
      // TODO This is here in order to update Raven
      this.tokenStore.setToken(token);
      return true;
    }
    return false;
  };

  signAndFetch = (req) => {
    let token = this.tokenStore.getToken();
    req.headers.append('X-Auth-Token', token);
    req.headers.append('Content-Type', 'application/json');

    return fetch(req).then(res => {
      if (res.status === 401 || res.status === 403) {
        this.logout();
      } else if (res.status === 400) {
        return res.json().then(err => {
          throw err
        });
      } else {
        return res.json()
      }
    });
  };

  signAndStream = (url, dispatch, callback) => {
    oboe({
      url,
      headers: {
        'X-Auth-Token': this.tokenStore.getToken(),
        'Content-Type': 'application/json',
      }
    }).done((obj) => {
      let isEmpty = obj === undefined ||
        obj === null ||
        (Object.keys(obj).length === 0 && obj.constructor === Object);
      if (!isEmpty) callback(obj)
    }).fail((errorReport) => {
      if (errorReport.statusCode === 401 || errorReport.statusCode === 403) {
        dispatch(logout());
      }
    })
  };

  isMy = (id) => this.tokenStore.isMy(id);

  logout = () => {
    this.tokenStore.removeToken();
    window.location = '/api/v1/auth/logout';
  }
}

export default new AuthService();