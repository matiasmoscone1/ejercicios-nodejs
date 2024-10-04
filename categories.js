const express = require("express");
const router = express.Router();
const { products } = require("./dbProducts");

router.get("/", (req, res) => {
    res.status(200).json(products);
});

router.get("/:categoryId/products", (req, res) => {
    try{
        const data = products.filter((prod) => prod.categoria === req.params.categoryId);    
        if(data.length > 0){
            res.status(200).json(data);
        }else{
            res.status(404).send("No se encontraron productos para esta categoria...");
        }
    }catch(err){
        res.status(500).send("Ha ocurrido un error:", err);
    }
});

module.exports = router;


