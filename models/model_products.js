
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    article: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
