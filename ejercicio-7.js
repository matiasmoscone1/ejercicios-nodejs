/* Listar Archivos en un Directorio:
Crea un programa que liste todos los archivos en un directorio específico. */
const fs = require("node:fs");

//console.log(__dirname);

fs.readdir(__dirname, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log(info);
    }   

});




