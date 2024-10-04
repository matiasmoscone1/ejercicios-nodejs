const express = require("express");
const router = express.Router();
const { categories, products } = require("./dbProducts");

router.get("/", (req, res) => {
    res.status(200).json(products);
});

router.get("/:categoryId/products", (req, res) => {
    try{
        const data = products.filter((prod) => prod.categoria === req.params.categoryId);    
        if(data){
            res.status(200).json(data);
        }   
    }catch(err){
        res.status(500).send("Ha ocurrido un error:", err);
    }
});

module.exports = router;


