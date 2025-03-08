import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect if not logged in
    }

    // Fetch user's rides
    axios.get("http://localhost:5000/api/rides/user", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
    })
    .then(response => setRides(response.data))
    .catch(error => console.error("Error fetching rides:", error));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="user-dashboard">
      {user ? (
        <>
          <h1>Welcome, {user.name}! 👋</h1>
          <p className="welcome-message">
            Schedule a ride, view history, and manage your account.
          </p>

          {/* Dashboard Sections */}
          <div className="dashboard-sections">
            <div className="dashboard-card">
              <h3>Schedule a Ride</h3>
              <Link to="/scheduling" className="dashboard-btn">Book Now</Link>
            </div>
            <div className="dashboard-card">
              <h3>Ride History</h3>
              <Link to="/ride-history" className="dashboard-btn">View History</Link>
            </div>
            <div className="dashboard-card">
              <h3>Profile & Settings</h3>
              <Link to="/profile" className="dashboard-btn">Manage Profile</Link>
            </div>
          </div>

          {/* Ride History Section */}
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

          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDashboard;
