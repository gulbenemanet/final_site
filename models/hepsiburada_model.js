const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hepsiSchema = new Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        //required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    point: {
        type: String,
    }
}, { collection: 'hepsiProduct' })

const Hepsi = mongoose.model('Hepsi', hepsiSchema)

module.exports = Hepsi;