const express = require("express");
const app = express();
require("./config/dbConfig");
require("dotenv").config();
const cors = require("cors");
const api = require("./routes/apiRoutes");

const port = process.env.PORT || 4000;


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));
app.use(express.json());
app.use("/api", api);


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor...");
    }else{
        console.log("Servidor levantado en el puerto:", port);        
    }
});

