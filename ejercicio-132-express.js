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


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



