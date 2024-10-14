const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./config/db");

const port = process.env.PORT || 4000;

connect();



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
