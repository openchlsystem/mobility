import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function Scheduling() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupLat: "",
    pickupLon: "",
    dropoffLat: "",
    dropoffLon: "",
    dateTime: "",
    phone: "",
    email: "",
    paymentMethod: "",
    agreeTerms: false,
  });

  const [suggestions, setSuggestions] = useState({ pickup: [], dropoff: [] });
  const [error, setError] = useState("");

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  // ✅ Fetch Location Suggestions from Nominatim API
  const fetchLocationSuggestions = async (query, type) => {
    if (query.length < 3) return;

    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      setSuggestions((prev) => ({ ...prev, [type]: res.data }));
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (name === "pickupLocation") fetchLocationSuggestions(value, "pickup");
    if (name === "dropoffLocation") fetchLocationSuggestions(value, "dropoff");
  };

  // ✅ Handle Location Selection
  const handleSelectLocation = (location, type) => {
    setFormData({
      ...formData,
      [`${type}Location`]: location.display_name,
      [`${type}Lat`]: location.lat,
      [`${type}Lon`]: location.lon,
    });
    setSuggestions((prev) => ({ ...prev, [type]: [] }));
  };

  // ✅ Prevent Selecting Past Dates
  const getMinDateTime = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setError("You must agree to the Privacy Policy to continue.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/rides/schedule", formData, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
      });

      alert("Ride Scheduled Successfully!");
      navigate(`/confirmation?pickupLat=${formData.pickupLat}&pickupLon=${formData.pickupLon}&dropoffLat=${formData.dropoffLat}&dropoffLon=${formData.dropoffLon}`);
    } catch (error) {
      console.error("Error scheduling ride:", error);
      setError("Error scheduling ride. Please try again.");
    }
  };

  return (
    <div className="scheduling-container">
      <h1 className="text-center">Book a Ride</h1>
      <p className="subtitle text-center">
        Schedule your non-emergency medical transportation easily.
      </p>

      {isLoggedIn ? (
        <form className="scheduling-form" onSubmit={handleSubmit}>
          {/* Service Type */}
          <label>Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="wheelchair">Wheelchair Transport</option>
            <option value="ambulatory">Ambulatory Transport</option>
            <option value="stretcher">Stretcher Transport</option>
          </select>

          {/* Pickup & Dropoff with Location Search */}
          <label>Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Search pickup location"
            required
          />
          <ul className="suggestions">
            {suggestions.pickup.map((loc) => (
              <li key={loc.place_id} onClick={() => handleSelectLocation(loc, "pickup")}>
                {loc.display_name}
              </li>
            ))}
          </ul>

          <label>Drop-off Location</label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            placeholder="Search drop-off location"
            required
          />
          <ul className="suggestions">
            {suggestions.dropoff.map((loc) => (
              <li key={loc.place_id} onClick={() => handleSelectLocation(loc, "dropoff")}>
                {loc.display_name}
              </li>
            ))}
          </ul>

          {/* Date & Time */}
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            min={getMinDateTime()}
            required
          />

          {/* Contact Details */}
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          {/* Payment Method */}
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment</option>
            <option value="medicaid">Medicaid</option>
            <option value="insurance">Insurance</option>
            <option value="private">Private Pay</option>
          </select>

          {/* Agreement */}
          <div className="checkbox-group">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
            <label>I agree to the <a href="/termsconditions" className="privacy-link">Privacy Policy</a></label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">Schedule Ride</button>
        </form>
      ) : (
        <h3 className="text-center text-danger">Redirecting to Login...</h3>
      )}
    </div>
  );
}

export default Scheduling;
