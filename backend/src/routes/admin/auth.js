var express = require('express');
var router = express.Router();
const adminControllers = require('../../controllers/admin/admin.controllers')
const authMiddlewares = require('../../middlewares/auth');

router.post('/login', adminControllers.loginAdmin);

router.get('/auth', authMiddlewares.authAdmin, (req, res) => {
  res.status(200).json({ login: true })
});

module.exports = router;