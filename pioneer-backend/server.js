const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const rideRoutes = require("./routes/rideRoutes"); // ✅ Added rideRoutes

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/rides", rideRoutes); // ✅ New route for ride scheduling

// ✅ Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("🚀 Pioneer Mobility Backend is Running!");
});

// ✅ Handle invalid API routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
