const express = require("express");
const router = express.Router();
const { categories, products } = require("./dbProducts");

router.get("/", (req, res) => {
    res.status(200).json(products);
});



module.exports = router;


