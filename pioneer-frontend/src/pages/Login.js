import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios"; // ✅ Use central axios instance
import "./styles.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", { email, password });

      sessionStorage.setItem("userToken", response.data.token); // ✅ Store token
      sessionStorage.setItem("user", JSON.stringify(response.data.user)); // ✅ Store user details

      if (response.data.user.role === "admin") {
        navigate("/admin-dashboard"); // ✅ Redirect admin to Admin Dashboard
      } else {
        navigate("/user-dashboard"); // ✅ Redirect user to User Dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="submit-btn">Login</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p><a href="/forgot-password">Forgot Password?</a></p>
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
}

export default Login;
