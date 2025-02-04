const jwtUtils = require('../utils/jwt.utils');

module.exports = {
  token: async (user) => {
    const token = jwtUtils.generateToken(user);
    return token;
  }
}