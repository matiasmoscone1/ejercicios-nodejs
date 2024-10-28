const express = require("express");
const app = express();
require("./config/dbConfig");
require("dotenv").config();

const port = process.env.PORT || 4000;




app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor...");
    }else{
        console.log("Servidor levantado en el puerto:", port);        
    }
});

