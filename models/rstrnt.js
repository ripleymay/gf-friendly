const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    satisfaction: Number,
    creator: Schema.Types.ObjectId
});

const menuSchema = new Schema({
    name: String,
    price: String,
    creator: Schema.Types.ObjectId
});

const rstrntSchema = new Schema({
    name: String,
    address: String,
    link: String,
    phone: String,
    creator: Schema.Types.ObjectId,
    comments: [commentSchema],
    menus: [menuSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Rstrnt', rstrntSchema);