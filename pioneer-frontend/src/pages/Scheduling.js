import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios"; // Import Axios instance
import "./styles.css";

function Scheduling() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    dateTime: "",
    phone: "",
    email: "",
    paymentMethod: "",
    agreeTerms: false,
  });

  useEffect(() => {
    if (!sessionStorage.getItem("userToken")) {
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Privacy Policy to continue.");
      return;
    }

    try {
      await api.post("/rides/schedule", formData);
      alert("Ride Scheduled Successfully!");
      navigate("/confirmation");
    } catch (error) {
      console.error("Error scheduling ride:", error);
      alert("Error scheduling ride. Please try again.");
    }
  };

  return (
    <div className="scheduling-container">
      <h1>Book a Ride</h1>
      {isLoggedIn ? (
        <form className="scheduling-form" onSubmit={handleSubmit}>
          <label>Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="wheelchair">Wheelchair Transport</option>
            <option value="ambulatory">Ambulatory Transport</option>
            <option value="stretcher">Stretcher Transport</option>
          </select>

          <label>Pickup Location</label>
          <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required />

          <label>Drop-off Location</label>
          <input type="text" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} required />

          <label>Date & Time</label>
          <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment</option>
            <option value="medicaid">Medicaid</option>
            <option value="insurance">Insurance</option>
            <option value="private">Private Pay</option>
          </select>

          <div className="checkbox-group">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
            <label>I agree to the <a href="/termsconditions">Privacy Policy</a></label>
          </div>

          <button type="submit" className="submit-btn">Schedule Ride</button>
        </form>
      ) : (
        <h3>Redirecting to Login...</h3>
      )}
    </div>
  );
}

export default Scheduling;
