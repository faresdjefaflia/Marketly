const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = {
  authAdmin: async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(400).json({ token: false });
    try {
      const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
      if (!decoded.role == "admin") return res.status(400).json({ token: false });
      req.user = decoded
      next();
    } catch (err) {
      return res.status(500).json({message: err.message})
    }
  }
}