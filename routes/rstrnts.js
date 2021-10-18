var express = require('express');
var router = express.Router();
const rstrntsCtrl = require('../controllers/rstrnts');

/* GET users listing. */
router.get('/', rstrntsCtrl.index);
router.get('/new', rstrntsCtrl.new);
router.post('/', rstrntsCtrl.create);

module.exports = router;
