var express = require('express');
var router = express.Router();

const adminControllers = require('../../../controllers/admin/admin.controllers');
const auth = require('../../../middlewares/auth');

router.post('/add',auth.authAdmin, adminControllers.addAdmin);
router.get('/show', auth.authAdmin, adminControllers.showAllAdmins);
router.put('/:id', auth.authAdmin, adminControllers.editAdmin)
module.exports = router;