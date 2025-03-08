import axios from "axios";

// Detect current hostname
const hostname = window.location.hostname;

// Define API URLs based on environment
const isLocalhost = ["localhost", "127.0.0.1"].includes(hostname);
const REMOTE_IP = process.env.REACT_APP_API_IP || "mobility.bitz-itc.com"; // Replace with your EC2/Public IP

const BASE_URL = isLocalhost
  ? "http://localhost:5000/api" // Local development API
  : `https://${REMOTE_IP}/api`; // Use HTTPS for production

// ✅ Create a single Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor (Attach Token)
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
