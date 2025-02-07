const adminsModules = require("../../models/admins.modules");

module.exports = {
  addAdminToData: async (data) => {
    try {
      const newAdmin = await adminsModules.insertAdmin(data)
      return newAdmin;
    } catch (err) {
      throw new Error(err.message)
    }
  }
}