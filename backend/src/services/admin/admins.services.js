const adminsModules = require("../../models/admins.modules");

module.exports = {
  addAdminToData: async (data) => {
    try {
      const newAdmin = await adminsModules.insertAdmin(data)
      return newAdmin;
    } catch (err) {
      throw new Error(err.message)
    }
  },
  showAllAdmins: async () => {
    try {
      const admins = await adminsModules.poolAdmins();
      return admins;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  editRoleForAdmin: async (role, id) => {
    try {
      const edit = await adminsModules.editRole(role, id);
      return edit;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  deleteAdmin: async(id) => {
    try {
      const deleteUser = await adminsModules.deleteUser(id)
      return deleteUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}