const pool = require("../config/dbConfig");
const nodemailer = require("nodemailer");

// ✅ Schedule a Ride
exports.scheduleRide = async (req, res) => {
    const { userId, serviceType, pickupLocation, dropoffLocation, dateTime, contactName, phone, email, paymentMethod } = req.body;

    try {
        const newRide = await pool.query(
            `INSERT INTO rides (user_id, service_type, pickup_location, dropoff_location, scheduled_time, contact_name, phone, email, payment_method, status) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'Pending') RETURNING *`,
            [userId, serviceType, pickupLocation, dropoffLocation, dateTime, contactName, phone, email, paymentMethod]
        );

        // ✅ Send confirmation email
        await sendConfirmationEmail(email, newRide.rows[0]);

        res.status(201).json({ message: "Ride scheduled successfully", ride: newRide.rows[0] });
    } catch (error) {
        console.error("Error scheduling ride:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Fetch Rides for a User
exports.getUserRides = async (req, res) => {
    try {
        const userId = req.user.id;
        const rides = await pool.query("SELECT * FROM rides WHERE user_id = $1 ORDER BY scheduled_time DESC", [userId]);

        if (rides.rows.length === 0) {
            return res.status(404).json({ message: "No rides found." });
        }

        res.json(rides.rows);
    } catch (error) {
        console.error("Error fetching rides:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Fetch All Rides (Admin)
exports.getAllRides = async (req, res) => {
    try {
        const rides = await pool.query(`
            SELECT rides.*, users.name AS user_name, users.email AS user_email 
            FROM rides 
            JOIN users ON rides.user_id = users.id 
            ORDER BY rides.scheduled_time DESC
        `);

        console.log("Fetched Rides from Database:", rides.rows); // ✅ Log fetched rides

        if (rides.rows.length === 0) {
            return res.status(404).json({ message: "No rides found." });
        }

        res.json(rides.rows);
    } catch (error) {
        console.error("Error fetching all rides:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// ✅ Confirm a Ride (Admin)
exports.confirmRide = async (req, res) => {
    const { rideId } = req.params;

    try {
        const updatedRide = await pool.query(
            "UPDATE rides SET status = 'Confirmed' WHERE id = $1 RETURNING *",
            [rideId]
        );

        if (updatedRide.rowCount === 0) {
            return res.status(404).json({ message: "Ride not found" });
        }

        // ✅ Send confirmation email
        await sendConfirmationEmail(updatedRide.rows[0].email, updatedRide.rows[0]);

        res.json({ message: "Ride confirmed successfully", ride: updatedRide.rows[0] });
    } catch (error) {
        console.error("Error confirming ride:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// ✅ Email Confirmation Function
const sendConfirmationEmail = async (userEmail, rideDetails) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: "Ride Confirmation - Pioneer Mobility",
        text: `Hello,\n\nYour ride has been successfully scheduled.\n\nDetails:\nPickup: ${rideDetails.pickup_location}\nDrop-off: ${rideDetails.dropoff_location}\nDate & Time: ${rideDetails.scheduled_time}\n\nThank you for choosing Pioneer Mobility!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Confirmation email sent.");
    } catch (error) {
        console.error("Error sending confirmation email:", error);
    }
};
exports.scheduleRide = async (req, res) => {
    const { serviceType, pickupLocation, dropoffLocation, dateTime, contactName, phone, email, paymentMethod } = req.body;

    try {
        console.log("User from Token:", req.user);  // ✅ Debug: Check user details

        const userId = req.user.id; // ✅ This should be the logged-in user's ID
        console.log("User ID:", userId); // ✅ Debug: Check extracted user ID

        const newRide = await pool.query(
            `INSERT INTO rides (user_id, service_type, pickup_location, dropoff_location, scheduled_time, contact_name, phone, email, payment_method, status) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'Pending') RETURNING *`,
            [userId, serviceType, pickupLocation, dropoffLocation, dateTime, contactName, phone, email, paymentMethod]
        );

        res.status(201).json({ message: "Ride scheduled successfully", ride: newRide.rows[0] });
    } catch (error) {
        console.error("Error scheduling ride:", error);
        res.status(500).json({ message: "Server error" });
    }
};
