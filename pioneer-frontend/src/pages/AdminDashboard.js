import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ridesCount, setRidesCount] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    // ✅ Fetch total users count
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUsersCount(response.data.length))
      .catch((error) => console.error("Error fetching users:", error));

    // ✅ Fetch total rides count
    axios
      .get("http://localhost:5000/api/admin/rides", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setRidesCount(response.data.length))
      .catch((error) => console.error("Error fetching rides:", error));
  }, []);

  return (
    <div className="admin-container">
      <h1>Welcome, Admin</h1>
      <p className="admin-intro">Manage users and scheduled rides efficiently.</p>

      <div className="admin-dashboard">
        <div className="admin-card">
          <h3>Total Users</h3>
          <p>{usersCount}</p>
        </div>

        <div className="admin-card">
          <h3>Total Rides</h3>
          <p>{ridesCount}</p>
        </div>
      </div>

      <div className="admin-actions">
        <Link to="/manage-users" className="admin-btn">Manage Users</Link>
        <Link to="/manage-rides" className="admin-btn">Manage Rides</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
