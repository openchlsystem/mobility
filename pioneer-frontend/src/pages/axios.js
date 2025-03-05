import axios from "axios";

// ✅ Detect if running on localhost
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

// ✅ Use dynamic IP if available, fallback to a predefined one
const REMOTE_IP = process.env.REACT_APP_API_IP || "18.177.175.202"; // Replace with your EC2 IP or environment variable

const BASE_URL = isLocalhost
  ? "http://localhost:5000/api"
  : `http://${REMOTE_IP}:5000/api`; // Use dynamic IP if set

// ✅ Create a single Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor (Add Token Automatically)
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("[Axios Request]", config); // Debugging log
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor (Handle Errors)
api.interceptors.response.use(
  (response) => {
    console.log("[Axios Response]", response); // Debugging log
    return response;
  },
  (error) => {
    console.error("[Axios Error]", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
