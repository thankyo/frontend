import 'whatwg-fetch';
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

  getUser = () => {
    return localStorage.getItem("user");
  };

  isMy = (id) => {
    if (id === "my")
      return true;
    return this.getUser() === id;
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

  authWithGoogle(history) {
    let url = `/api/v1/auth/social/google${history.location.search}`;
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

  post = (url, body) => this.signAndFetch(new Request(url, { method: "POST", body: JSON.stringify(body) }));

  put = (url, body) => this.signAndFetch(new Request(url, { method: "PUT", body: JSON.stringify(body) }));

  get = (url) => this.signAndFetch(new Request(url));

  remove = (url) => this.signAndFetch(url, { method: 'DELETE' });

  signAndFetch = (req, isJson = true) => {
    let token = this.tokenStore.getToken();
    req.headers.append('X-Auth-Token', token);
    req.headers.append('Accept', 'application/json');
    req.headers.set('Content-Type', 'application/json');

    return fetch(req).then(res => {
      if (res.status === 401 || res.status === 403) {
        this.logout();
      } else if (res.status === 400) {
        return res.json().then(err => {
          throw err
        });
      } else if (isJson) {
        return res.json()
      } else {
        return res;
      }
    });
  };

  isMy = (id) => this.tokenStore.isMy(id);

  getUser = () => this.tokenStore.getUser();

  logout = () => {
    this.tokenStore.removeToken();
    window.location = '/api/v1/auth/logout';
  }
}

export default new AuthService();