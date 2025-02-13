const joiUtils = require('../utils/joi.utils');

module.exports = {
  validateAdminLogin: async (data) => {
    try {
      const error = await joiUtils.joiLogin(data);
      return error;
    }
    catch (err) {
      throw new Error(err.message);
    }
  },
  validateAdminAdd: async (data) => {
    try {
      const error = await joiUtils.joiAddAdmin(data);
      return error;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}