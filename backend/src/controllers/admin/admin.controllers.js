const encryptPasswordServices = require('../../services/encryptPassword.services');
const validateDataReqServices = require('../../services/validateDataReq.services');
const validateUserInData = require('../../services/validateUserInData.services');
const createTokenServices = require('../../services/createToken.services');


  /**
   * Handles admin login process.
   * @route /admin/login
   * @method POST
   * @access public
   * @etape01 Extract admin data from the request body.
   * @etape02 Validate input data (e.g., email format, password strength).
   * @etape03 Check if the admin already exists in the database.
   * @etape04 Compare the password input with the hashed password in the database.
   * @etape05 Generate a JWT token for authentication.
   * @etape06 Return a success response with the JWT token.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void|Object>}
   */
module.exports.loginAdmin = async (req, res) => {
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
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
    });

    return res.status(200).json({ message: "Welcome admin" });
    
  } catch (err) {
    console.error(err); // طباعة الخطأ بالكامل لسهولة التتبع
    return res.status(500).json({ message: "Internal server error" });
  }
};

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
