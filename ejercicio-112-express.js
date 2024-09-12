/* Redirección de rutas: Redirige una ruta (ej: /old-page) a una nueva ruta (ej: /new-page). */


const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/old-page", (req, res) => {
    res.status(301).redirect("/new-page");
});

app.get("/new-page", (req, res) => {
    res.status(200).send("Se redirigió a la nueva pagina :)");
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:",err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


