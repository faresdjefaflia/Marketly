const encryptPasswordServices = require('../../services/encryptPassword.services');

module.exports.loginAdmin = (req, res) => {
  /**
  @desc Admin login
  @route /admin/login
  @method POST
  @access private (Admins only)
  @etape01 Extract email and password from request body.
  @etape02 Check if the admin exists in the database.
  @etape03 Compare the provided password with the hashed password.
  @etape04 Generate a JWT token if authentication is successful.
  @etape05 Return the token and admin details in the response.
 */
  res.status(200).json({message: 'welcome admin'})
}

module.exports.addAdmin = async (req, res) => {
  /**
  @desc Handles admin registration process.
  @route /admin
  @method POST
  @access private (Restricted to super admin)
  @etape01 Extract admin data from the request body.
  @etape02 Validate input data (e.g., email format, password strength).
  @etape03 Check if the admin already exists in the database.
  @etape04 Hash the password before storing it.
  @etape05 Assign admin role and permissions.
  @etape06 Save the admin data into the database.
  @etape07 Generate a JWT token for authentication.
  @etape08 Return a success response with admin details and token.
  */
  try {
    const { password } = req.body
    const passwordEncrypt = await encryptPasswordServices(password)
    console.log(passwordEncrypt)
    res.status(200).json(passwordEncrypt)
  }
  catch (err) {
    res.status(500).json({message: err.message})
  }
}

module.exports.showAllAdmins = (req, res) => {
  /**
  @desc Retrieves the list of all admins.
  @route /admin
  @method GET
  @access private (Restricted to super admin)
  @etape01 Authenticate the request and verify super admin access.
  @etape02 Query the database to fetch all admins.
  @etape03 Return the list of admins in the response.
 */

  res.status(200).json({message: "this all admins list"})
}
