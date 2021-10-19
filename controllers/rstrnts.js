const Rstrnt = require('../models/rstrnt');

module.exports = {
    index,
    new: newRstrnt,
    create,
    show,
    edit,
    update,
    delete: deleteRstrnt
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

function edit(req, res) {
    Rstrnt.findById(req.params.id, function(err, rstrnt) {
        if (err) return res.redirect('/rstrnts');
        res.render('rstrnts/edit', {rstrnt});
      });
}

function update(req, res) {
    Rstrnt.findByIdAndUpdate(req.params.id, req.body, {new: true},
        function(err, rstrnt) {
          if (err) return res.redirect('/rstrnts');
          res.redirect(`/rstrnts/${rstrnt._id}`);
        }
    );
}

function deleteRstrnt(req, res) {
    Rstrnt.findByIdAndDelete({_id: req.params.id, creator: req.user._id},
        function(err) {
            res.redirect('/rstrnts');
    })
}