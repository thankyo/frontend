import 'whatwg-fetch';
import {logout} from 'reducers/auth.actions'
import oboe from 'oboe';

class AuthService {
    isAuthenticated() {
        let token = localStorage.getItem("token");
        return token !== undefined && token !== null;
    }
    signAndFetch(req, dispatch) {
        let token = localStorage.getItem("token");
        if (this.isAuthenticated())
            req.headers.append('X-Auth-Token', token);

        return fetch(req).then(res => {
            if (res.status === 401 || res.status === 403) {
                dispatch(logout());
            } else if (res.status == 400) {
                return res.json().then(err => { throw err });
            } else {
                return res.json()
            }
        });
    }
    signAndStream(url, dispatch, callback) {
        oboe({
            url,
            headers: {
                'X-Auth-Token': this.getToken()
            }
        }).
        done((obj) => {
            let isEmpty = obj === undefined ||
                obj == null ||
                (Object.keys(obj).length === 0 && obj.constructor === Object);
            if (!isEmpty) callback(obj)
        }).
        fail(( errorReport ) => {
            if (errorReport.statusCode === 401 || errorReport.statusCode === 403) {
                dispatch(logout());
            }
        })
    }
    getToken() {
        return localStorage.getItem("token");
    }
    getUserIdentity() {
        return this.parseJwt(this.getToken());
    }
    parseJwt (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    setToken(token) {
        localStorage.setItem("token", token.trim());
    }
    removeToken() {
        localStorage.removeItem("token")
    }
}

export default new AuthService();