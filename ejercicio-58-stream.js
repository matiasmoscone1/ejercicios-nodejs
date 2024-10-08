/* Compresión de archivos: Escribe un programa que utilice streams para leer un archivo, 
comprimirlo usando zlib.createGzip(), y escribir el resultado comprimido en un nuevo archivo. */

const stream = require("node:stream");
const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("mensaje.txt");
const writableStream = fs.createWriteStream("mensaje_comprimido.txt.gz");
const comprimeStream = zlib.createGzip();

readableStream.pipe(comprimeStream).pipe(writableStream);

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

comprimeStream.on("error", (err) => {
    console.log("Error al comprimir el archivo: ", err);
});





