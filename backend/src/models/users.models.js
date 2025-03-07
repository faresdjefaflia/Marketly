const pool = require('../config/db');

module.exports = {
  poolUsers: async () => {
    try {
      const users = await pool.query('SELECT * FROM users');
      return users;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  poolUserWithEmail: async (email) => {
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      return user[0];
    } catch (err) {
      throw new Error(err.message);
    }
  },

  poolUserWithId: async (id) => {
    try {
      const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
      return user[0];
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
