const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina Users");
});

router.get("/list", (req, res) => {
    res.status(200).send("------------- Listado de usuarios -------------");
});

router.get("/filter", (req, res) => {
    res.status(200).send("Filtrado de usuarios!!!");
});


module.exports = router;


