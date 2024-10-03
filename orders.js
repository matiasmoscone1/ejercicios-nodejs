const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina orders");
});

router.get("/list", (req, res) => {
    res.status(200).send("------------- LISTADO DE ORDENES -------------");
});

router.get("/recent", (req, res) => {
    res.status(200).send("Ordenes mas recientes...");
});

module.exports = router;


