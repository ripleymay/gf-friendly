const Rstrnt = require('../models/rstrnt');

module.exports = {
    index,
    new: newRstrnt,
    create
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
    rstrnt.save(function(err) {
        if (err) return res.render('rstrnts/new');
        console.log(rstrnt);
        res.redirect('/rstrnts');
    });
}