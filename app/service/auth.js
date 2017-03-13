class AuthService {
    constructor() {
    }
    isAuthenticated() {
        let token = localStorage.getItem("token");
        return token !== undefined && token !== null;
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