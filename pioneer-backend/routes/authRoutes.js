const express = require("express");
const { signup, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ User Registration
router.post("/signup", signup);

// ✅ User Login
router.post("/login", login);

// ✅ Get User Profile (Authenticated users only)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
