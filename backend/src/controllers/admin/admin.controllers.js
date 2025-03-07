const encryptPasswordServices = require('../../services/encryptPassword.services');
const validateDataReqServices = require('../../services/validateDataReq.services');
const validateUserInData = require('../../services/validateUserInData.services');
const createTokenServices = require('../../services/createToken.services');

const adminsServices = require("../../services/admin/admins.services");


module.exports = {
  loginAdmin: async (req, res) => {
    try {
      const email = req.body.email?.trim();
      const password = req.body.password?.trim();

      // Validate with Joi
      const error = await validateDataReqServices.validateAdminLogin(req.body);
      if (error) return res.status(400).json(error.details[0]);

      // Validate if user is admin
      const user = await validateUserInData.validateUser(email);
      if (!user || user.role !== "admin") {
        return res.status(403).json({ message: "Invalid credentials" });
      }

      // Compare password input with hash
      const match = await encryptPasswordServices.comparePassword(password, user.password);
      if (!match) return res.status(403).json({ message: "Invalid credentials" });

      // Create token with JWT
      const token = await createTokenServices.token(user);
      res.cookie('token', token, {  
        secure: true,   
        sameSite: 'Strict', 
        maxAge: 7 * 24 * 60 * 60 * 1000
      });
      return res.end();
      //return res.status(200).json({ message: "Welcome admin" });
      
    } catch (err) {
      console.error(err); // طباعة الخطأ بالكامل لسهولة التتبع
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  addAdmin: async (req, res) => {
    try {
      // Validate authentication and ensure the user has "admin" privileges
      // /src/middlewares/auth.js
      // Validate the input data from the request (e.g., check if required fields are present and correct)
      const error = await validateDataReqServices.validateAdminAdd(req.body)
      if(error) return res.status(403).json(error.details[0].message)
      // Verify that the user being added doesn't already exist in the database
      const user = await validateUserInData.validateUser(req.body.email)
      if(user) return res.status(403).json({message: "Invalid credentials"})
      // Encrypt the password using a secure algorithm (e.g., bcrypt)
      const { name, email, password, role } = req.body;
      const passwordEncrypt = await encryptPasswordServices.encryptPassword(password)
      // Insert the new admin's data into the database with the "admin" role
      const newAdminData = {
        name: name,
        email: email,
        password: passwordEncrypt,
        role: role
      };
      const newAdmin = await adminsServices.addAdminToData(newAdminData);
      if(newAdmin) return res.status(200).json({message: "admin is add"})
    }
    catch (err) {
      res.status(500).json({message: err.message})
    }
  },
  showAllAdmins: async (req, res) => {
    //pool all admins from database
    const admins = await adminsServices.showAllAdmins();
    //edit data for send to frontend
    const filterAdmins = admins.map((admin) => {
      return {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        address: admin.address,
        created_at: admin.created_at
      }
    });
    //send admins to frontend
    return res.status(200).json({admins: filterAdmins})
  },
  editAdmin: async (req, res) => {
    // Extract the role from the request body (new role to be assigned)
    const role = req.body.role;
    
    // Extract the admin ID from the request parameters
    const id = req.params.id;

    try {
        // Call the service function to update the admin's role in the database
        const edit = await adminsServices.editRoleForAdmin(role, id);

        // Check if any row was affected (i.e., if the admin exists and role changed)
        if (!edit[0] || edit[0].affectedRows === 0) {
            return res.status(404).json({ message: "Admin not found or role unchanged" });
        }

        // Return success message if the update was successful
        return res.status(200).json({ message: "Role updated successfully", role: edit[1][0].role });
    } catch (err) {
        // Handle server errors and return an error response
        res.status(500).json({ message: err.message });
    }
  }
}