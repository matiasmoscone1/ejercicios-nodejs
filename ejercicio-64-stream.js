/* Stream de línea por línea: Escribe un programa que lea un archivo de texto línea por 
línea usando streams y realice alguna operación en cada línea, como contar el número de 
palabras o caracteres. */

const rl = require("node:readline");
const fs = require("node:fs");

const readableStream = fs.createReadStream("mensaje.txt");

const interface = rl.createInterface({
    input: readableStream,
    crlfDelay: Infinity
});

let lineCount = 1;
interface.on("line", (line) => {
    let letterCount = 0;
    letterCount = line.length;
    console.log(`El numero de letras en la linea ${lineCount} es: ${letterCount}`);
    lineCount++;
});

interface.on("close", () => {
    console.log("Lectura de archivo finalizada...");
})

