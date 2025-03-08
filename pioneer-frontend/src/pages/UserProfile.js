import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // ✅ Get user from session storage (Used at Login)
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user from session storage
    } else {
      navigate("/login"); // Redirect to login if not found
    }

    // ✅ Fetch user's rides
    axios.get("http://localhost:5000/api/rides/user", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
    })
    .then(response => setRides(response.data))
    .catch(error => console.error("Error fetching ride data:", error));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>

      {user ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not Provided"}</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p className="loading-text">Loading user details...</p>
      )}

      <h2>My Rides</h2>
      {rides.length > 0 ? (
        <ul className="ride-list">
          {rides.map((ride) => (
            <li key={ride.id}>
              {ride.pickup_location} → {ride.dropoff_location} | <strong>Status:</strong> {ride.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No rides booked yet.</p>
      )}
    </div>
  );
}

export default UserProfile;
