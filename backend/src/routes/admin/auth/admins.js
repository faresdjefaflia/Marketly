var express = require('express');
var router = express.Router();

const adminControllers = require('../../../controllers/admin/admin.controllers')

router.post('/add', adminControllers.addAdmin);
router.get('/show', adminControllers.showAllAdmins);


module.exports = router;