const poolUserFromData = require('../models/users.models');

module.exports = {
  validateUser: async (email) => {
    try {
      const user = await poolUserFromData.poolUserWithEmail(email)
      return user;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
}