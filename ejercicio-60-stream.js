/* Concatenación de archivos: Crea un programa que lea múltiples archivos de texto usando 
Readable streams y los concatene en un único archivo de salida usando un Writable stream. */

const fs = require("node:fs");

const readableStream = fs.createReadStream("mensaje.txt");
const readableStream2 = fs.createReadStream("mensaje2.txt");
const readableStream3 = fs.createReadStream("mensaje3.txt");












