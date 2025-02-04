const encryptPasswordServices = require('../../services/encryptPassword.services');
const validateDataReqServices = require('../../services/validateDataReq.services');
const validateUserInData = require('../../services/validateUserInData.services');
const createTokenServices = require('../../services/createToken.services')
module.exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validate with joi
    const error = await validateDataReqServices.validateAdminLogin(req.body);
    if (error) {
      return res.status(400).json(error.details[0])
    };
    //validate if admin in database
    //validate is user a admin
    const user = await validateUserInData.validateUser(email);
    if (!user || user.role !== "admin") {
      return res.status(403).json({message: "user not found"})
    };
    //compare password input with hash
    const match = await encryptPasswordServices.comparePassword(email, password);
    if (!match) {
      return res.status(403).json({message: 'you cant login now'})
    };
    //create token with jwt
    const token = await createTokenServices.token(user)
    return res.status(200).json({message: 'welcome admin', token: token})
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
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
    const passwordEncrypt = await encryptPasswordServices.encryptPassword(password)
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
