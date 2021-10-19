const Rstrnt = require('../models/rstrnt');

module.exports = {
    create,
    delete: deleteMenu
};

function create(req, res) {
    Rstrnt.findById(req.params.id, function (err, rstrnt) {
        req.body.creator = req.user._id;
        rstrnt.menus.push(req.body);
        rstrnt.save(function (err) {
            res.redirect(`/rstrnts/${rstrnt._id}`);
        });
    });
}

async function deleteMenu(req, res) {
    const rstrnt = await Rstrnt.findOne({'menus._id': req.params.id});
    const menu = rstrnt.menus.id(req.params.id);
    if (!menu.creator.equals(req.user._id)) return res.redirect(`/rstrnts/${rstrnt._id}`);
    menu.remove();
    await rstrnt.save();
    res.redirect(`/rstrnts/${rstrnt._id}`);
}