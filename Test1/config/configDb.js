const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {

    try{
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("Base de datos conectada con exito!");        
    }catch(err){
        console.log("Ocurrio un error al conectar la base de datos:", err);
    }

} 

connect();

module.exports = connect;
