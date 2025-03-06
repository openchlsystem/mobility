const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const rideRoutes = require("./routes/rideRoutes");

dotenv.config();
const app = express();

// ✅ Configure CORS properly to allow frontend access
app.use(cors({
    origin: ["http://18.177.175.202", "http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

// ✅ Routes
app.use("./auth", authRoutes);
app.use("./admin", adminRoutes);
app.use("./rides", rideRoutes);

// ✅ Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("🚀 Pioneer Mobility Backend is Running!");
});

// ✅ Handle invalid API routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// ✅ Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error("🔥 Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start the server and listen on all interfaces
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running on port ${PORT} and accessible externally`);
});
