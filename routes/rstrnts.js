var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('rstrnts/index');
});

router.get('/new', function(req, res) {
  res.render('rstrnts/new')
});

module.exports = router;
