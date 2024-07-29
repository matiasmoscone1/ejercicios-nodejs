/* Listar Archivos en un Directorio:
Crea un programa que liste todos los archivos en un directorio específico. */
//const fs = require("node:fs");
const fs = require("node:fs/promises");

//console.log(__dirname);

/* --------------------------------- VERSION NORMAL ----------------------------------*/
/*
fs.readdir(__dirname, (err, info) => {
    if(err){
        throw new Error;
    }else{
        info.map((file) => {
            console.log(file);
        });
        //console.log(info);
    }   

});*/

//console.log(__filename);

/* --------------------------------- VERSION PROMESA ----------------------------------*/
const listFiles = async () => {
    try{
        const files = await fs.readdir(__dirname);
        files.forEach((file) => {
            console.log(file);
        })
    }catch(err){
        console.log(err);
    }

}

listFiles();





