import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axios.js"; // ✅ Use the centralized Axios instance
import "./styles.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/signup", formData);
      console.log("Signup response for host:", response, window.location.hostname);
      setMessage("Account created successfully! Redirecting to login...");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      console.log("Signup response for host:", window.location.hostname);

      console.error("Signup error:", error);
      setError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignup}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <p>Already have an account? <a href="/login">Log in here</a></p>
      </div>
    </div>
  );
}

export default Signup;
