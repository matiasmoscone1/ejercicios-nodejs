/* 4. Cargar controladores en los routers: Crea un archivo de controladores para cada grupo 
de rutas (usersController.js, productsController.js, etc.). Los controladores deben manejar 
la lógica de las respuestas de cada ruta y ser importados en los archivos de rutas que usan 
express.Router(). Asocia cada ruta en el router con su respectivo controlador. */

const express = require("express");
const app = express();
require("dotenv").config();
const users = require("./users");

const port = process.env.PORT || 4000;

app.use("/users", users);



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el serivodor:", err);
    }else{
        console.log("Se ha levantado el servidor en el puerto:", port);
    }
});

