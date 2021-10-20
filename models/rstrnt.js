const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    satisfaction: Number,
    creator: Schema.Types.ObjectId,
    creatorName: String,
    creatorAvatar: String
});

const menuSchema = new Schema({
    name: String,
    price: String,
    creator: Schema.Types.ObjectId
});

const rstrntSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    address: String,
    link: String,
    phone: {
        type: String,
        match: /[1-9]\d{2}-\d{3}-\d{4}/
    },
    creator: Schema.Types.ObjectId,
    comments: [commentSchema],
    menus: [menuSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Rstrnt', rstrntSchema);