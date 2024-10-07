const express = require("express");
const router = express.Router();
const usersController = require("./usersControllers");

/*
router.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina Users");
});*/

router.get("/", usersController.index);

/*
router.get("/list", (req, res) => {
    res.status(200).send("------------- Listado de usuarios -------------");
});*/

router.get("/list", usersController.list);

/*
router.get("/filter", (req, res) => {
    res.status(200).send("Filtrado de usuarios!!!");
});*/

router.get("/filter", usersController.filter);

const validToken = "1234";

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if(token === validToken){
        next();
    }else{
        res.status(404).send("Token no valido...");
    }
    console.log(req.headers);
};

router.get("/dashboard-admin", verifyToken, (req, res) => {
    res.status(200).send("SOLO PUEDE ENTRAR EL ADMIN CON UN TOKEN A ESTA PAGINA!!!!");
});

module.exports = router;


