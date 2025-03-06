import axios from "axios";

// Get current hostname and set REMOTE IP for production
const hostname = window.location.hostname;
const REMOTE_IP = '18.177.175.202';

// Check if the environment is localhost or production based on hostname
const isLocalhost = ['localhost', '127.0.0.1'].includes(hostname);

// If you want to check NODE_ENV for production (React build process)
const isProduction = process.env.NODE_ENV === "production";

// Set BASE_URL based on environment
const BASE_URL = isLocalhost || !isProduction
  ? "http://localhost:5000/api" // Local Development API
  : `http://${REMOTE_IP}/api`; // Remote API for production

// Create a single Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach Token if available
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

// Response Interceptor: Handle Responses and Errors
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
