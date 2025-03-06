
import axios from "axios";

// Detect current hostname
//const hostname = window.location.hostname;

<<<<<<< HEAD
// Check if the environment is localhost or production based on hostname
const isLocalhost = ['localhost', '127.0.0.1'].includes(hostname);

// If you want to check NODE_ENV for production (React build process)
const isProduction = process.env.NODE_ENV === "production";

// Set BASE_URL based on environment
const BASE_URL = isLocalhost || !isProduction
  ? "http://localhost:5000/api" // Local Development API
  : `http://${REMOTE_IP}:5000/api`; // Remote API for production
=======
// Define API URLs based on environment
//const isLocalhost = "http:18.177.175.202";

// define the remote IP address based  the current production environment
//const REMOTE_IP = "18.177.175.202";
>>>>>>> bff6e22e0f6db7b046e739b0b2aa9c0e3a8e88c8


let BASE_URL = "http://18.177.175.202";
// if (isLocalhost) {
//   BASE_URL = "http://localhost:5000/api"; // Local Development API
// } else {
//   BASE_URL = `${REMOTE_IP}:5000/`; // Ensure correct port in production
// }
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
