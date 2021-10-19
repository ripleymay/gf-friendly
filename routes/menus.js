const express = require('express');
const router = express.Router();
var menusCtrl = require('../controllers/menus');
const isLoggedIn = require('../config/auth');

router.post('/rstrnts/:id/menus', isLoggedIn, menusCtrl.create);
router.delete('/rstrnts/:rstrntId/menus/:menuId', menusCtrl.delete);

module.exports = router;