const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");
const cors = require("cors");
const port = process.env.PORT || 4000;
const api = require("../backend/routes/apiRoutes");

app.use(cors({
    origin: 'http://localhost:5173', 
  }));

app.use("/api", api);

app.listen(port, (err) => {
    if(err){
        console.log("Ocurrio un problema al conectar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



