import 'whatwg-fetch';
import {logout} from '../reducers/auth.actions'

class AuthService {
    constructor() {
    }
    isAuthenticated() {
        let token = localStorage.getItem("token");
        return token !== undefined && token !== null;
    }
    fetch(req, dispatch) {
        if (this.isAuthenticated())
            req.headers.append('X-Auth-Token', this.getToken());
        let res = fetch(req).then(res => {
            if (res.status === 401 || res.status === 403) {
                dispatch(logout());
            } else {
                return res.json()
            }
        });
        return res;
    }
    getToken() {
        return localStorage.getItem("token");
    }
    setToken(token) {
        localStorage.setItem("token", token);
    }
    removeToken() {
        localStorage.removeItem("token")
    }
}

export default new AuthService();