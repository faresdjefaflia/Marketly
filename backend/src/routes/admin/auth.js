var express = require('express');
var router = express.Router();
const adminControllers = require('../../controllers/admin/admin.controllers')

router.post('/login', adminControllers.loginAdmin);

module.exports = router;