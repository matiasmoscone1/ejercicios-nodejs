const express = require("express");
const router = express.Router();
const productsController = require("./productsController");

/*
router.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina productos");
});*/

router.get("/", productsController.index);

router.get("/api/v1", productsController.v1);

router.get("/api/v2", productsController.v2);

/*
router.get("/view", (req, res) => {
    res.status(200).send("TODOS LOS PRODUCTOS");
});*/

router.get("/view", productsController.view);

/*
router.get("/category", (req, res) => {
    res.status(200).send("Selecciona una categoria de productos!");
});*/

router.get("/category", productsController.category);

module.exports = router;
