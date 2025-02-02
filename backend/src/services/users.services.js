const userModels = require('../models/users.models');

module.exports.getUsers = async () => {
  try {
    const users = await userModels.poolUsers();
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};