class LocalStorageJWTTokenStore {
  getToken = () => localStorage.getItem("token");

  setToken = (auth) => {
    let { token, details: { id, email }} = auth;

    localStorage.setItem("token", token.trim());
    localStorage.setItem("user", id);
    localStorage.setItem("email", email);
  };

  getUser = () => localStorage.getItem("user")

  isMy = (id) => {
    if (id === "my")
      return true;
    return localStorage.getItem("user") === id;
  };

  removeToken = () => {
    localStorage.clear();
  };
}

const tokenStore = new LocalStorageJWTTokenStore();

export default tokenStore;

