var express = require('express');
var router = express.Router();
const rstrntsCtrl = require('../controllers/rstrnts');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', rstrntsCtrl.index);
router.get('/new', isLoggedIn, rstrntsCtrl.new);
router.post('/', isLoggedIn, rstrntsCtrl.create);
router.get('/:id', rstrntsCtrl.show);

module.exports = router;
