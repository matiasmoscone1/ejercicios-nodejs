/* Usar next() en middleware: Crea dos middlewares que manejen una solicitud y luego 
pasen el control con next(). */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log("Se esta ejecutando el primer middleware");
    if(req.url !== "/" && req.url !== "/about"){
        res.status(404).send("Filtro primer middleware: Pagina no encontrada...");
    }
    next();    
});

app.use((req, res, next) => {
    console.log("Se esta ejecutando el segundo middleware");
    console.log(`Hora de solicitud filtrada por segundo middleware: \nSolcitud: ${req.protocol}://${req.headers.host}${req.url} \nHora: ${new Date().toISOString()}`);
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

