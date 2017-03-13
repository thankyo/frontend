import 'whatwg-fetch';

class AuthService {
    constructor() {
    }
    isAuthenticated() {
        let token = localStorage.getItem("token");
        return token !== undefined && token !== null;
    }
    fetch(req) {
        if (this.isAuthenticated())
            req.headers.append('X-Auth-Token', this.getToken());
        return fetch(req).then(res => res.json())
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