import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_API_URL;

const instance = axios.create({
    baseURL,
    timeout: 3000
});

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});

export default instance;