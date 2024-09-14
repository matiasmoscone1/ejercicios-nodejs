/* Usar next() en middleware: Crea dos middlewares que manejen una solicitud y luego 
pasen el control con next(). */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.status(200).send("Se esta ejecutando el primer middleware");
    next();
});

app.use((req, res, next) => {
    res.status(200).send("Se esta ejecutando el segundo middleware");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!!!");
});

app.get("/about", (req, res) => {
    res.status(200).send("Bienvenido a la seccion about us :)");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

