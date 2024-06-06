const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amazonSchema = new Schema({
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
    },
    point: {
        type: String,
    }
}, { collection: 'amazonProduct' })

const Amazon = mongoose.model('Amazon', amazonSchema)

module.exports = Amazon;