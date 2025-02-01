const usersServices = require('../../services/users.services');

module.exports.showAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getUsers();
    res.status(200).json(users);
  }
  catch (err) {
    res.status(500).send('error')
  }
};