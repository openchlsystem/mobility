const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/dbConfig"); // ✅ Ensure your database config is correct

// User Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database
    const newUser = await pool.query(
      "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token, user: user.rows[0] });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await pool.query("SELECT id, name, email, phone FROM users WHERE id = $1", [req.user.id]);
    
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.rows[0]);

  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
