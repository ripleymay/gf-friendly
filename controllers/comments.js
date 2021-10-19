const Rstrnt = require('../models/rstrnt');

module.exports = {
    new: newComment,
    create,
    edit,
    update,
    delete: deleteComment
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

async function edit(req, res) {
    const rstrnt = await Rstrnt.findOne({'comments._id': req.params.id});
    const comment = rstrnt.comments.id(req.params.id);
    if (!comment.creator.equals(req.user._id)) return res.redirect(`/rstrnts/${rstrnt._id}`);
    res.render('comments/edit', {rstrnt, comment});
}

function update(req, res) {

}

async function deleteComment(req, res) {
    const rstrnt = await Rstrnt.findOne({'comments._id': req.params.id});
    const comment = rstrnt.comments.id(req.params.id);
    if (!comment.creator.equals(req.user._id)) return res.redirect(`/rstrnts/${rstrnt._id}`);
    comment.remove();
    await rstrnt.save();
    res.redirect(`/rstrnts/${rstrnt._id}`);
}