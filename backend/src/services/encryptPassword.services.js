const bcrypt = require('bcrypt');
const userModels = require('../models/users.models');


module.exports = {
  encryptPassword: async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (err) {
      throw new Error('Error fetching users: ' + err.message);
    }
  },

  comparePassword: async (password, hash) => {
    try {
      const match = await bcrypt.compare(password, hash);
      return match;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
};