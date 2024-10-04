/* 3. Middleware específico en un Router. Implementa un middleware específico para el router 
de usuarios (users.js). 
Este middleware debe verificar si un usuario tiene un token válido antes de acceder a las 
rutas de usuarios. Si no tiene un token válido, envía un mensaje de "Acceso denegado". */

const express = require("express");
const app = express();
require("dotenv").config();
const users = require("./users");
const port = process.env.PORT || 4000;

app.use("/users", users);




app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


