// posts.js
const POSTS_API_BASE = 'https://bootstrap.net10010.cn/api/posts'; // 改为你的实际后端地址

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return { Authorization: token || '' };
}

const postsApi = {
  async getAll() {
    return await axios.get(POSTS_API_BASE, {
      headers: getAuthHeaders()
    });
  },

  async getOne(id) {
    return await axios.get(`${POSTS_API_BASE}/${id}`, {
      headers: getAuthHeaders()
    });
  },

  async create(post) {
    return await axios.post(POSTS_API_BASE, post, {
      headers: getAuthHeaders()
    });
  },

  async update(id, post) {
    return await axios.put(`${POSTS_API_BASE}/${id}`, post, {
      headers: getAuthHeaders()
    });
  },

  async remove(id) {
    return await axios.delete(`${POSTS_API_BASE}/${id}`, {
      headers: getAuthHeaders()
    });
  }
};

export default postsApi;