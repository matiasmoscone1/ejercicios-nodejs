/* Lo mismo que el ejercicio 58 pero ahora para descomprimir el archivo. */

const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("mensaje_comprimido.txt.gz");
const writableStream = fs.createWriteStream("mensaje_descomprimido.txt");
const descomprimeStream = zlib.createGunzip();

readableStream.pipe(descomprimeStream).pipe(writableStream);

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

descomprimeStream.on("error", (err) => {
    console.log("Error al descomprimir el archivo: ", err);
});

