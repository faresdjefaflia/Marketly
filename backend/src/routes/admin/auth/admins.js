var express = require('express');
var router = express.Router();

const adminControllers = require('../../../controllers/admin/admin.controllers');
const auth = require('../../../middlewares/auth');

router.post('/add',auth.authAdmin, adminControllers.addAdmin);
router.get('/show', auth.authAdmin, adminControllers.showAllAdmins);
router.put('/:id', auth.authAdmin, adminControllers.editAdmin)
router.delete('/:id', auth.authAdmin, adminControllers.deleteAdmin)
module.exports = router;