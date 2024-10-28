const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {

    try{
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("Se ha conectado la base de datos con exito!!!");        
    }catch(err){
        console.log("Ha ocurrido un error al conectar la base de datos...");
    }
}

connect();

module.exports = connect;