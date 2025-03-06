import axios from "axios";

const hostname = window.location.hostname;
const isLocalhost = ["localhost", "127.0.0.1"].includes(hostname);
const REMOTE_IP = "18.177.175.202";
const BASE_URL = isLocalhost ? "http://localhost:5000/api" : `http://${REMOTE_IP}:5000/api`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("[Axios Request]", config);
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("[Axios Response]", response);
    return response;
  },
  (error) => {
    console.error("[Axios Error]", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
