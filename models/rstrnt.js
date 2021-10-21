const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    satisfaction: {
        type: Number,
        required: true
    },
    creator: Schema.Types.ObjectId,
    creatorName: String,
    creatorAvatar: String
});

const menuSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: {
        type: String,
        match: /\d+\.?\d{0,2}/
    },
    creator: Schema.Types.ObjectId
});

const rstrntSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    address: String,
    city: String,
    state: {
        type: String,
        match: /[A-Z][A-Z]/
    },
    link: {
        type: String,
        match: /https?:\/\/\S+/
    },
    phone: {
        type: String,
        match: /[1-9]\d{2}-\d{3}-\d{4}/
    },
    description: String,
    creator: Schema.Types.ObjectId,
    comments: [commentSchema],
    menus: [menuSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Rstrnt', rstrntSchema);