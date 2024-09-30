const Product = require("models/product_model.js");

const createProduct = (req, res) => {
    const { article, category, price, description } = req.body;
    const newProduct = new Product({ article, category, price, description});
    newProduct.save();
    res.status(200).json(newProduct);
}

module.exports = { createProduct }
