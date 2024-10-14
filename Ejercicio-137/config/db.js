//Configuracion de conexion de BDD
require("dotenv").config();
const mongoose = require("mongoose");


const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_II, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexion a la BDD exitosa!");
    }catch(err){
        if(err){
            console.log("Ha ocurrido un error al conectar la base de datos:", err);
        }
    }
};

connection();

module.exports = connection;
