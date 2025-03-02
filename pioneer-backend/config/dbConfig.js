const { Pool } = require("pg");
require("dotenv").config();

// PostgreSQL connection settings
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Check if the database is connected
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL Database"))
  .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool;
