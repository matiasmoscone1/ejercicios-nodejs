/* Filtrado de datos: Crea un Transform stream que filtre un archivo JSON de manera que solo 
los objetos que cumplan con ciertos criterios (por ejemplo, edad > 30) sean escritos en 
un nuevo archivo JSON. */

const fs = require("node:fs");
const stream = require("node:stream");

const readableStream = fs.createReadStream("prueba-json.json");
const writableStream = fs.createWriteStream("filtrado-json.json");

const transform = new stream.Transform({
    transform(chunk, encoding, callback){
        const filter = chunk.filter((user) => user.edad > 30);
        this.push(filter);
        callback();
    }
});

readableStream.pipe(transform).pipe(writableStream);











