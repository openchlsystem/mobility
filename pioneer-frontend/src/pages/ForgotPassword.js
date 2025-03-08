import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    // Simulate checking if user exists (This will later be connected to the backend)
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulated password reset success
    setMessage("Password successfully updated! Redirecting to login...");
    setError("");

    setTimeout(() => {
      navigate("/login"); // Redirect to login after successful password reset
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Reset Password</h1>
        <p>Enter your email and set a new password.</p>

        <form onSubmit={handleReset}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />

          <label>New Password:</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            placeholder="Enter new password" 
            required 
          />

          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm new password" 
            required 
          />

          <button type="submit" className="submit-btn">Reset Password</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <p><a href="/login">Back to Login</a></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
