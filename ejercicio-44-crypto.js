/* Validar la integridad de un archivo: Calcula el hash de un archivo utilizando SHA-1 y 
luego verifica que el archivo no haya sido modificado comparando el hash calculado con 
un hash preexistente. */ 

const crypto = require("node:crypto");
const fs = require("node:fs");

const fileHash = "5c3c9e36e0d71921c53df0acc4e72629d84a85103c5a3804727ebf04d4551cf2";


const readF = () => {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256");

        const input = fs.createReadStream(`${__dirname}/mensaje.txt`);

        resolve(input.pipe(hash).setEncoding("hex").pipe(process.stdout));        
    });
}

readF().then((hash) => {
    if(fileHash === hash){
        console.log("Archivo sin modificar");
    }else{
        console.log("Archivo modificado!!! Hashes no coinciden...");
    }   
})


