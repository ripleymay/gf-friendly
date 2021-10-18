const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    satisfied: Boolean,
    creator: Schema.Types.ObjectId
});

const menuItemSchema = new Schema({
    name: String,
    price: Number,
    creator: Schema.Types.ObjectId
});

const rstrntSchema = new Schema({
    name: String,
    address: String,
    url: String,
    phone: String,
    creator: Schema.Types.ObjectId,
    comments: [commentSchema],
    menuItems: [menuItemSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Rstrnt', rstrntSchema);