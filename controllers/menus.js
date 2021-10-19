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
    const rstrnt = await Rstrnt.findById(req.params.rstrntId);
    const menu = rstrnt.menus.id(req.params.menuId);
    if (!menu.creator.equals(req.user._id)) return res.redirect(`/rstrnts/${rstrnt._id}`);
    menu.remove();
    await rstrnt.save();
    res.redirect(`/rstrnts/${rstrnt._id}`);
}