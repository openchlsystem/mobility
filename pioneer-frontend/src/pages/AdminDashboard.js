import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./axios.js"; // ✅ Use axios.js
import "./styles.css";

function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ridesCount, setRidesCount] = useState(0);

  useEffect(() => {
    api.get("/admin/users")
      .then((response) => setUsersCount(response.data.length))
      .catch((error) => console.error("Error fetching users:", error));

    api.get("/admin/rides")
      .then((response) => setRidesCount(response.data.length))
      .catch((error) => console.error("Error fetching rides:", error));
  }, []);

  return (
    <div className="admin-container">
      <h1>Welcome, Admin</h1>
      <p className="admin-intro">Manage users and scheduled rides efficiently.</p>

      <div className="admin-dashboard">
        {/* ✅ Updated Manage Users Card */}
        <Link to="/manage-users" className="admin-card">
          <h3>Manage Users</h3>
          <p>Total Users: <strong>{usersCount}</strong></p>
        </Link>

        {/* ✅ Manage Rides Card with Total Rides */}
        <Link to="/manage-rides" className="admin-card">
          <h3>Manage Rides</h3>
          <p>Total Rides: <strong>{ridesCount}</strong></p>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
