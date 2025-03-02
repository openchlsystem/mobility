import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function ManageRides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/rides", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
      })
      .then((response) => setRides(response.data))
      .catch((error) => console.error("Error fetching rides:", error));
  }, []);

  const confirmRide = (rideId) => {
    axios
      .put(`http://localhost:5000/api/admin/confirm-ride/${rideId}`, {}, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
      })
      .then(() => {
        setRides(rides.map((ride) => ride.id === rideId ? { ...ride, status: "Confirmed" } : ride));
      })
      .catch((error) => console.error("Error confirming ride:", error));
  };

  return (
    <div className="admin-container">
      <h1>Manage Rides</h1>

      {rides.length === 0 ? (
        <p>No scheduled rides.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Pickup</th>
              <th>Dropoff</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.user_name}</td>
                <td>{ride.user_email}</td>
                <td>{ride.pickup_location}</td>
                <td>{ride.dropoff_location}</td>
                <td>{new Date(ride.scheduled_time).toLocaleString()}</td>
                <td>{ride.status}</td>
                <td>
                  {ride.status === "Pending" && (
                    <button className="confirm-btn" onClick={() => confirmRide(ride.id)}>
                      Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageRides;
