/* Implementar autenticación JWT: Usa JSON Web Tokens (JWT) para autenticar y autorizar a 
los usuarios. */

const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 4000;

const payload = {
    userId: "admin",
    role: "admin"
};

const secretKey = "1234";

const token = jwt.sign(payload, secretKey, {expiresIn: "1h"});

console.log(token);


app.get("/", (req, res) => {
    res.status(200).send("Bienivenido a la pagina principal!!!");
});

app.get("/dashboard-admin", (req, res) => {
    const authHeader = req.headers["authorization"];

    if(!authHeader){
        res.status(404).send("Error: token no proporcionado...");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            return res.status(403).send("Token no valido...");
        }
        res.status(200).send("Bienvenido al dashboard del admin!!!");
    })

});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



