/* Encriptación y desencriptación con claves derivadas: Utiliza la clave derivada en el 
enunciado anterior para encriptar y luego desencriptar un archivo de texto. */

const crypto = require("node:crypto");

const password = "hola123";

const devKey = () => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, "salt", 100000, 32, "sha512", (err, derivedKey) => {
            if(err){
                throw reject;
            }else{
                resolve(derivedKey.toString("hex"));
                //console.log(derivedKey.toString("hex"));
            }
        });   
    });
}

devKey().then((key) => {
    console.log(key);
})


