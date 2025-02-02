const pool = require('../config/db');

module.exports = {
  poolUsers: async () => {
    try {
      const users = await pool.query('SELECT * FROM Users');
      return users;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  poolUserWithEmail: async (email) => {
    try {
      const user = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
      console.log(user)
      return user[0];
    } catch (err) {
      throw new Error(err.message);
    }
  }
};
