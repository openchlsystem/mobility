import axios from "axios";

// Detect current hostname
const hostname = window.location.hostname;

// Define API URLs based on environment
const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
const REMOTE_IP = process.env.REACT_APP_API_IP || "18.177.175.202"; // Replace with EC2 Public IP

let BASE_URL;

if (isLocalhost) {
  BASE_URL = "http://localhost:5000/api"; // Local Development API
} else {
  BASE_URL = `http://${REMOTE_IP}:5000/api`; // Ensure correct port in production
}

console.log(`🔹 Axios Base URL: ${BASE_URL}`); // Debugging

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
    console.log("🚀 Axios Request:", config); // Debugging
    return config;
  },
  (error) => {
    console.error("❌ Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor (Handle Errors)
api.interceptors.response.use(
  (response) => {
    console.log("✅ Axios Response:", response); // Debugging
    return response;
  },
  (error) => {
    console.error("⚠️ Axios Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
