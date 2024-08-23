/* Transformación de datos: Crea un Transform stream que reciba un archivo de texto y 
convierta todo el contenido a mayúsculas antes de escribirlo en un nuevo archivo. */

const stream = require("node:stream");
const fs = require("node:fs");

const tra = new stream.Transform({
    transform(chunk, encoding, callback){
        const upperCaseChunk = chunk.toString().toUpperCase();
        this.push(upperCaseChunk);
        callback();
    }
});

console.log(tra);

