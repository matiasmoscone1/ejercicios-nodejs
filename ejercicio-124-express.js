/* Paginación de resultados: Implementa paginación para un conjunto de datos (como usuarios 
o productos) en la base de datos. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;




app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("El servidor ha sido levantado en el puerto:", port);
    }
});    







