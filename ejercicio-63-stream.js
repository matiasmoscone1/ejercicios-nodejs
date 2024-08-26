/* Filtrado de datos: Crea un Transform stream que filtre un archivo JSON de manera que solo 
los objetos que cumplan con ciertos criterios (por ejemplo, edad > 30) sean escritos en 
un nuevo archivo JSON. */

const fs = require("node:fs");
const stream = require("node:stream");

const readableStream = fs.createReadStream("prueba-json.json");
const writableStream = fs.createWriteStream("filtrado-json.json");

const transform = new stream.Transform({
    transform(chunk, encoding, callback){
        const parseData = JSON.parse(chunk);
        const filter = parseData.filter((user) => user.edad > 30);
        this.push(JSON.stringify(filter, null, 2));
        callback();
    }
});

readableStream.pipe(transform).pipe(writableStream);

readableStream.on("error", (err) => {
    console.log("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log("Error al escribir el archivo: ", err);
});

transform.on("error", (err) => {
    console.log("Error al filtrar el archivo: ", err);
});







