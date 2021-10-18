const express = require('express');
const router = express.Router();
var menusCtrl = require('../controllers/menus');
const isLoggedIn = require('../config/auth');

router.post('/rstrnts/:id/menus', isLoggedIn, menusCtrl.create);

module.exports = router;