const express = require('express');
const router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.get('/rstrnts/:id/comments/new', commentsCtrl.new);
router.post('/rstrnts/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.get('/comments/:id/edit', commentsCtrl.edit);
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;