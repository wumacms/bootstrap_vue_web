// // api.js
// const API_BASE_URL = 'https://bootstrap.net10010.cn/api/auth';

// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     timeout: 5000,
//     headers: { 'Content-Type': 'application/json' }
// });

// export async function register(data) {
//     return axiosInstance.post('/register', data);
// }

// export async function login(data) {
//     return axiosInstance.post('/login', data);
// }

// export async function logout(token) {
//     return axiosInstance.post('/logout', null, {
//         headers: { Authorization: token }
//     });
// }

// api.js
const API_BASE_URL = 'https://bootstrap.net10010.cn/api/auth'; // 替换为你的后端地址

export default {
    async login({ username, password }) {
        return await axios.post(`${API_BASE_URL}/login`, { username, password });
    },

    async register({ username, password }) {
        return await axios.post(`${API_BASE_URL}/register`, { username, password });
    },

    async logout(token) {
        return await axios.post(`${API_BASE_URL}/logout`, null, {
            headers: { Authorization: token },
        });
    },
};