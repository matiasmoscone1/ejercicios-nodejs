/* Derivar una clave de una contraseña: Deriva una clave segura a partir de una contraseña 
usando el algoritmo PBKDF2 y genera un hash que incluya una sal aleatoria. */


const crypto = require("node:crypto");

const password = "hola123";


crypto.pbkdf2(password, "salt", 100000, 32, "sha512", (err, derivedKey) => {
    if(err){
        throw new Error;
    }else{
        console.log(derivedKey.toString("hex"));
    }
});






