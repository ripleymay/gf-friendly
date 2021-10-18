const Rstrnt = require('../models/rstrnt');

module.exports = {
    new: newComment,
    create
};

function newComment(req, res) {
    Rstrnt.findById(req.params.id, function (err, rstrnt) {
        res.render('comments/new', { rstrnt });
    });
}

function create(req, res) {
    Rstrnt.findById(req.params.id, function (err, rstrnt) {
        req.body.creator = req.user._id;
        rstrnt.comments.push(req.body);
        rstrnt.save(function (err) {
            res.redirect(`/rstrnts/${rstrnt._id}`);
        });
    });
}
