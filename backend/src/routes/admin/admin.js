var express = require('express');
var router = express.Router();

const adminControllers = require('../../controllers/admin/admin.controllers')
/* GET admins listing. */
router.get('/login', adminControllers.loginAdmin);
router.post('/add-admin', adminControllers.addAdmin);
router.get('/all-admin', adminControllers.showAllAdmins);


module.exports = router;
