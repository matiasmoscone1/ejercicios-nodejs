/* Crear un token seguro para autenticación: Genera un token aleatorio y seguro utilizando 
crypto.randomBytes() para ser utilizado en un sistema de autenticación. */


const crypto = require("node:crypto");

const generateToken = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(2, (err, buf) => {
            if(err){
                reject(err);
            }else{
                const number = parseInt(buf.toString("hex"), 16);
                resolve(number);    
            }
        });
    });

}

generateToken().then((token) => {
    console.log("Token generado: ", token);
}).catch((err) => {
    console.log("Error al obtener el token...", err);
});


