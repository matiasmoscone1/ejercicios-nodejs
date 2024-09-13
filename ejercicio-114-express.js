/* Manejo de errores simples: Implementa un middleware de manejo de errores para capturar 
rutas no encontradas. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.use((req, res, next) => {
    res.status(404).send("Pagina no encontrada...");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Ocurrio un error al cargar la pagina");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});




