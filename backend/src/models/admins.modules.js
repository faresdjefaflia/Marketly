const dataBase = require('../config/db');

module.exports = {
  insertAdmin: async (data) => {
    const { name, email, password, role } = data;
    try {
      const newAdmin = await dataBase.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role])
      console.log(newAdmin)
      return newAdmin;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}