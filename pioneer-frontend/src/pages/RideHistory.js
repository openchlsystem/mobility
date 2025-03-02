import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function RideHistory() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rides/user", { 
      headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
    })
      .then(response => setRides(response.data))
      .catch(error => console.error("Error fetching ride history:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Ride History</h1>
      <ul className="ride-list">
        {rides.length > 0 ? rides.map((ride) => (
          <li key={ride.id}>
            {ride.pickup_location} → {ride.dropoff_location} | <strong>Status:</strong> {ride.status}
          </li>
        )) : <p>No rides found.</p>}
      </ul>
    </div>
  );
}

export default RideHistory;
