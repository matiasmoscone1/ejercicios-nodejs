/* Servidor básico con Express: Crea un servidor simple que responda "Hello World" en 
la ruta raíz (/). */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido, esta es la pagina principal");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

