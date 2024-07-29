/* Listar Archivos en un Directorio:
Crea un programa que liste todos los archivos en un directorio específico. */
const fs = require("node:fs");

//console.log(__dirname);


fs.readFile("ejercicio-7.js", {encoding: "utf-8"}, (err, info) => {
    if(err){
        throw new Error;
    }
    console.log(info);
});

