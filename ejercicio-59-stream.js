/* Lo mismo que el ejercicio 58 pero ahora para descomprimir el archivo. */

const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("mensaje_comprimido.txt.gz");
const writableStream = fs.createWriteStream("mensaje_descomprimido.txt");
const descomprimeStream = zlib.createGunzip();

readableStream.pipe(descomprimeStream).pipe(writableStream);




