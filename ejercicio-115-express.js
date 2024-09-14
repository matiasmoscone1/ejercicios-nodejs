/* Middleware básico: Crea un middleware que imprima en consola la URL de cada solicitud. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {

});

app.get("/search", (req, res) => {

});




app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el serivodr:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
