/* Middleware básico: Crea un middleware que imprima en consola la URL de cada solicitud. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/search", (req, res) => {
    res.status(200).send("Bienvenido a la pagina de busqueda :)");
});

app.use((req, res, next) => {
    console.log(req.url);
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el serivodr:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
