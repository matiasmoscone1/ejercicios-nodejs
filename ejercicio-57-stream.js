/* Transformación de datos: Crea un Transform stream que reciba un archivo de texto y 
convierta todo el contenido a mayúsculas antes de escribirlo en un nuevo archivo. */

const stream = require("node:stream");
const fs = require("node:fs");

const readableStream = fs.createReadStream("mensaje.txt");
const writableStream = fs.createWriteStream("mensaje_transform.txt");

const tra = new stream.Transform({
    transform(chunk, encoding, callback){
        const upperCaseChunk = chunk.toString().toUpperCase();
        this.push(upperCaseChunk);
        callback();
    }
});

readableStream.pipe(tra).pipe(writableStream);

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

tra.on("error", (err) => {
    console.log("Error al transformar el archivo: ", err);
});


