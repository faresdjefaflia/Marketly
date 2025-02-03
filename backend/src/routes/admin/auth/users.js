var express = require('express');
var router = express.Router();

const usersControllers = require('../../../controllers/admin/users.controllers');
/* GET users listing. */
router.get('/', usersControllers.showAllUsers);

module.exports = router;
