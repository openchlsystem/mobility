import React, { useEffect, useState } from "react";
import api from "./axios.js"; // ✅ Use axios.js
import "./styles.css";

function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [rides, setRides] = useState([]);

  useEffect(() => {
    api.get("/admin/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));

    api.get("/admin/rides")
      .then(response => setRides(response.data))
      .catch(error => console.error("Error fetching rides:", error));
  }, []);

  const confirmRide = (rideId) => {
    api.put(`/rides/confirm/${rideId}`)
      .then(() => {
        setRides(rides.map(ride =>
          ride.id === rideId ? { ...ride, status: "Confirmed" } : ride
        ));
      })
      .catch(error => console.error("Error confirming ride:", error));
  };

  return (
    <div className="admin-container">
      <h1>Admin Profile</h1>

      <h2>Registered Users</h2>
      {users.length > 0 ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone || "Not Provided"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}

      <h2>Scheduled Rides</h2>
      {rides.length > 0 ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Pickup</th>
              <th>Dropoff</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rides.map(ride => (
              <tr key={ride.id}>
                <td>{ride.pickup_location}</td>
                <td>{ride.dropoff_location}</td>
                <td>{ride.status}</td>
                <td>
                  {ride.status === "Pending" && (
                    <button className="confirm-btn" onClick={() => confirmRide(ride.id)}>✅ Confirm</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rides found.</p>
      )}
    </div>
  );
}

export default AdminProfile;
