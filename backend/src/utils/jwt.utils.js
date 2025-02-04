const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  generateToken: async (user) => {
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    return token;
  }
};
