import { API_BASE } from "./constants.js";

class UserService {
  _apiBase;

  constructor(api) {
    this._apiBase = api;
  }

  async getUsers() {
    const response = await fetch(`${this._apiBase}/`);
    return await response.json();
  }

  async getUserById(id) {
    const response = await fetch(`${this._apiBase}/${id}`);
    return await response.json();
  }

  async getUserPosts(id) {
    const response = await fetch(`${this._apiBase}/${id}/posts`);
    return await response.json();
  }
}

const userService = new UserService(`${API_BASE}/users`);
export default userService;
