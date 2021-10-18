const express = require('express');
const router = express.Router();
var commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.get('/rstrnts/:id/comments/new', isLoggedIn, commentsCtrl.new);
router.post('/rstrnts/:id/comments', isLoggedIn, commentsCtrl.create);

module.exports = router;