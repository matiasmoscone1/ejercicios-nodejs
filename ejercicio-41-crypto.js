/* Crear un token seguro para autenticación: Genera un token aleatorio y seguro utilizando 
crypto.randomBytes() para ser utilizado en un sistema de autenticación. */


const crypto = require("node:crypto");

const generateToken = () => {
    crypto.randomBytes(3, (err, buf) => {
        if(err){
            throw new Error;
        }else{
            console.log(buf.toString("hex"));
            return(buf);    
        }
    });

}

generateToken();


