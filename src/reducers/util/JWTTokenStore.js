class LocalStorageJWTTokenStore {
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
      if (Raven) {
        Raven.setUserContext({ id, email });
      }
    } catch (err) {
    }

    try {
      if (ga) {
        ga('set', 'userId', id)
      }
    } catch (err) {
    }

    try {
      $crisp.push(["set", "user:email", [ email ]])
    } catch (err) { }
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

const tokenStore = new LocalStorageJWTTokenStore();

export default tokenStore;

