/* Pipe de streams: Crea una cadena de streams donde los datos se leen de un archivo, 
se transforman (por ejemplo, se encriptan), y luego se escriben en otro archivo. 
Usa el método pipe() para conectar los streams. */

const crypto = require("node:crypto");
const fs = require("node:fs");

const readableStream = fs.createReadStream("mensaje.txt");
const writableStream = fs.createWriteStream("z-ejercicio-65-encriptado.txt");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(12);

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

let encrypted = "";

cipher.on("data", (chunk) => {
    encrypted += chunk;
});

cipher.on("error", (err) => {
    console.log("Ocurrio un error en la encriptacion del archivo: ", err);
});


readableStream.pipe(cipher).pipe(writableStream);

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

writableStream.on("finish", () => {
    console.log("Archivo encriptado correctamente!!!");
});







