const Rstrnt = require('../models/rstrnt');

module.exports = {
    index,
    new: newRstrnt,
    create,
    show
};

function index(req, res) {
    Rstrnt.find({}, function(err, rstrnts) {
        res.render('rstrnts/index', {rstrnts});
    }).sort('name');
}

function newRstrnt(req, res) {
    res.render('rstrnts/new');
}

function create(req, res) {
    const rstrnt = new Rstrnt(req.body);
    rstrnt.creator = req.user._id;
    rstrnt.save(function(err) {
        if (err) return res.render('rstrnts/new');
        res.redirect('/rstrnts');
    });
}

function show(req, res) {
    Rstrnt.findById(req.params.id, function(err, rstrnt) {
        res.render('rstrnts/show', {rstrnt});
    });
}