import 'whatwg-fetch';
import { saveAs } from "file-saver";
import { SubmissionError } from "redux-form";

import tokenStore from "./JWTTokenStore";

function handleFetchResponse(res) {
  if (res.status === 400) {
    return res.json().then(({ field, error }) => {
      throw new SubmissionError({ [field]: error })
    });
  }
  return res.json();
}

function handleCSVResponce(fileName){
  return (res) => {
    res.text().then(text => {
      let csv = new Blob([text], { type: "text/csv;charset=utf-8" });
      return saveAs(csv, fileName);
    });
  }

}

class AuthService {
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

  post = (url, body) => this.signAndFetch(new Request(url, { method: "POST", body: JSON.stringify(body) }));

  put = (url, body) => this.signAndFetch(new Request(url, { method: "PUT", body: JSON.stringify(body) }));

  get = (url) => this.signAndFetch(new Request(url));

  getCSV = (url, fileName) => (
    this.signAndFetch(new Request(url), false).then(handleCSVResponce(fileName))
  );

  remove = (url) => this.signAndFetch(new Request(url, { method: 'DELETE' }));

  signAndFetch = (req, isJson = true) => {
    let token = tokenStore.getToken();
    req.headers.append('X-Auth-Token', token);
    req.headers.append('Accept', 'application/json');
    req.headers.set('Content-Type', 'application/json');

    return fetch(req).then(res => {
      if (res.status === 401 || res.status === 403) {
        this.logout();
      } else if (res.status === 400) {
        return res.json().then(({ field, error }) => {
          throw new SubmissionError({ [field]: error })
        });
      } else if (isJson) {
        if (res.status === 204) {
          return { isMissing: true }
        } else {
          return res.json()
        }
      } else {
        return res;
      }
    });
  };

  isMy = (id) => tokenStore.isMy(id);

  getUser = () => tokenStore.getUser();

  logout = () => {
    tokenStore.removeToken();
    window.location = '/api/v1/auth/logout';
  }
}

export default new AuthService();