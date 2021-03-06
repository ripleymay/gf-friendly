const express = require('express');
const router = express.Router();
var menusCtrl = require('../controllers/menus');

router.post('/rstrnts/:id/menus', menusCtrl.create);
router.delete('/menus/:id', menusCtrl.delete);

module.exports = router;