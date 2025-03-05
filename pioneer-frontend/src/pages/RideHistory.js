import React, { useState, useEffect } from "react";
import api from "./axios.js";
import "./styles.css";

function RideHistory() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    api.get("/rides/user")
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
