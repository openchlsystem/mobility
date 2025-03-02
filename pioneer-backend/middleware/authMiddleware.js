const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;  // ✅ This should now contain the correct user ID
        console.log("Extracted User ID:", req.user.id);  // ✅ Debugging line
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token." });
    }
};
