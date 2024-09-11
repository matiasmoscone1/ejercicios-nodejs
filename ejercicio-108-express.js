/* Servidor básico con Express: Crea un servidor simple que responda "Hello World" en 
la ruta raíz (/). 
Rutas básicas: Agrega rutas como /about y /contact que respondan con diferentes mensajes. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});

app.get("/about", (req, res) => {
    res.send("Bienvenido a la seccion about");
});

app.get("/contact", (req, res) => {
    res.send("Bienvenido a la seccion contact");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

