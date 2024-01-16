import { API_BASE } from "./constants.js";

class PostService {
  _apiBase;

  constructor(api) {
    this._apiBase = api;
  }

  async getPostById(id) {
    const response = await fetch(`${this._apiBase}/${id}`);
    return await response.json();
  }

  async getPostComments(id) {
    const response = await fetch(`${this._apiBase}/${id}/comments`);
    return await response.json();
  }
}

const userService = new PostService(`${API_BASE}/posts`);
export default userService;
