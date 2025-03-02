const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");
const authMiddleware = require("../middleware/authMiddleware");

// ✅ Book a ride (User)
router.post("/schedule", authMiddleware, rideController.scheduleRide);

// ✅ Get all rides for a logged-in user
router.get("/user", authMiddleware, rideController.getUserRides);

// ✅ Admin: Get all rides
router.get("/admin", authMiddleware, rideController.getAllRides);

// ✅ Admin: Confirm a ride
router.put("/confirm/:rideId", authMiddleware, rideController.confirmRide);

module.exports = router;
