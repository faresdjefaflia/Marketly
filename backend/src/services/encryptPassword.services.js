const bcrypt = require('bcrypt');

/**
 * Encrypts a given password using bcrypt.
 *
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} The hashed password.
 * @throws {Error} If the hashing process fails.
 */

module.exports = async function encryptPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    throw new Error('Error fetching users: ' + err.message);
  }
};
