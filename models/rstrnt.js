const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rstrntSchema = new Schema({
    name: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Rstrnt', rstrntSchema);