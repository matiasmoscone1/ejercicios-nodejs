const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");
const port = process.env.PORT || 4000;



app.listen(port, (err) => {
    if(err){
        console.log("Ocurrio un problema al conectar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



