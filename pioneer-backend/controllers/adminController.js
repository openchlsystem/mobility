const pool = require("../config/dbConfig");

// ✅ Get all users (Admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query(
            "SELECT id, name, email, phone, created_at FROM users"
        );

        if (users.rows.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }

        res.json(users.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Get all rides with user details
const getAllRides = async (req, res) => {
    try {
        const rides = await pool.query(
            `SELECT rides.id, users.name AS user_name, users.email AS user_email, 
             rides.pickup_location, rides.dropoff_location, rides.scheduled_time, rides.status 
             FROM rides 
             JOIN users ON rides.user_id = users.id 
             ORDER BY rides.scheduled_time DESC`
        );

        if (rides.rows.length === 0) {
            return res.status(404).json({ message: "No rides scheduled." });
        }

        res.json(rides.rows);
    } catch (error) {
        console.error("Error fetching rides:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Confirm a ride
const confirmRide = async (req, res) => {
    const { rideId } = req.params;
    try {
        const result = await pool.query(
            "UPDATE rides SET status = 'Confirmed' WHERE id = $1 RETURNING *",
            [rideId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Ride not found." });
        }

        res.json({ message: "Ride confirmed successfully.", ride: result.rows[0] });
    } catch (error) {
        console.error("Error confirming ride:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAllUsers, getAllRides, confirmRide };
