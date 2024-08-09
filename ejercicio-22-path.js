/* Ruta absoluta: Dado un directorio y un archivo, utiliza path.resolve() para generar la 
ruta absoluta hacia ese archivo. */

const path = require("node:path");
const fs = require("node:fs");

const dir = "C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS";
const file = "loadvg.txt";

const completePath = path.resolve(dir, file);
console.log(completePath);

fs.readFile(file, {encoding: "utf-8"}, (err, info) => {
    if(err){
        console.log(err);
    }else{
        console.log(info);
    }
});



