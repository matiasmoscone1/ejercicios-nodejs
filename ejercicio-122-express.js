/* Rutas protegidas: Implementa un middleware que proteja rutas, permitiendo el acceso solo
a usuarios autenticados. */

const express = require("express");
const app = express();
const session = require("express-session");

const port = process.env.PORT || 3000;

const dbUsers = [{
    username: "Lionel",
    password: "1234"
}];


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


