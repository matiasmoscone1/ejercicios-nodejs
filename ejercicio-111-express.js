/* Uso de query en rutas: Crea una ruta que reciba parámetros de consulta 
(/search?query=nombre) y devuelve el valor. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/search", (req, res) => {
    const data = req.query.query;
    
    res.status(200).send(`La query es: ${data}`);

});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en puerto:", port);
    }
});







