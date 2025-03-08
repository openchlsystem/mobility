import React, { useEffect, useState } from "react";
import api from "./axios.js";
import "./styles.css";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/admin/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="admin-container">
      <h1>Manage Users</h1>

      {users.length === 0 ? (
        <p>No registered users.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageUsers;
