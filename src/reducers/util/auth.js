import 'whatwg-fetch';
import oboe from 'oboe';
import { handleFetchResponse } from "./http";

class TokenStore {
  getToken = () => {
    return localStorage.getItem("token");
  };

  setToken = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let identity = JSON.parse(window.atob(base64));
    localStorage.setItem("user", identity.id);

    localStorage.setItem("token", token.trim());
  };

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

  doAuth(req, history) {
    return fetch(req).
      then((res) => handleFetchResponse(res)).
      then(token => this.tokenStore.setToken(token)).
      then(auth => history.push("/supporter/my"));
  }

  authWithFacebook(history) {
    let url = `/api/v1/auth/social/facebook${history.location.search}`;
    return this.doAuth(new Request(url, { credentials: 'same-origin' }), history);
  }

  signUp(req, history) {
    let url = `/api/v1/auth/register`;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: JSON.stringify(req)
    };
    return this.doAuth(new Request(url, options), history);
  }

  login(req, history) {
    let url = `/api/v1/auth/logIn`;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: JSON.stringify(req)
    };
    return this.doAuth(new Request(url, options), history);
  }

  forgot(req) {
    let url = `/api/v1/auth/password/forgot`;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: JSON.stringify(req)
    };
    return fetch(new Request(url, options)).
      then(handleFetchResponse);
  }

  isAuthenticated = () => {
    let token = this.tokenStore.getToken();
    return token !== undefined && token !== null;
  };

  signAndFetch = (req) => {
    let token = this.tokenStore.getToken();
    if (this.isAuthenticated())
      req.headers.append('X-Auth-Token', token);

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
        'X-Auth-Token': this.tokenStore.getToken()
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