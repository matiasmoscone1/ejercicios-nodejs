/* Parámetros en rutas: Crea una ruta que reciba un parámetro dinámico, como /user/:id, 
y devuelva el ID del usuario. */

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});

app.get("/users", (req, res) => {
    res.send("Bienvenido a la pagina usuarios");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});





