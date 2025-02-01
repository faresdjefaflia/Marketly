const pool = require('../config/db');


module.exports.poolUsers = async () => {
  try {
    const users = await pool.query('SELECT *FROM Users');
    return users;
  } catch (err) {
    throw new Error('Error fetching users: ' + err.message);
  }
};