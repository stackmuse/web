class User {
  storage = localStorage;
  key = "user";
  data = {};

  constructor() {
    this.#load();
  }

  #load() {
    const data = JSON.parse(this.storage.getItem(this.key));
    this.data = data == null ? {} : data;
  }

  #dump() {
    this.storage.setItem(this.key, JSON.stringify(this.data));
  }

  isAuthenticated() {
    return this.data.username != null;
  }

  login(username, password) {
    this.data.username = username;
    this.#dump();
  }

  logout() {
    this.data = {};
    this.#dump();
  }
}

export default User;
