const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
}, { collection: 'product' })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;