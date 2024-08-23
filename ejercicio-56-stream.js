/* Lectura y escritura de archivos: Crea un programa que lea un archivo grande utilizando un 
Readable stream y lo copie en otro archivo utilizando un Writable stream. Asegúrate de manejar 
posibles errores durante el proceso. */

const fs = require("node:fs");

const readableStream = fs.createReadStream("mensaje.txt");
const writableStream = fs.createWriteStream("output_mensaje.txt");

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

writableStream.on("finish", () => {
    console.log("Archivo copiado correctamente!!!");
})

readableStream.pipe(writableStream);


