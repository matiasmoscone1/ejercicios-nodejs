/* Implementación de un Duplex stream: Implementa un Duplex stream personalizado que actúe 
como un eco, es decir, que cualquier dato escrito en él sea inmediatamente leído de nuevo. */

const stream = require("node:stream");

const duplex = new stream.Duplex({
    read(size){

    },
    write(chunk, encoding, callback){
        this.push(chunk);
        callback();
        console.log(chunk.toString());
    },
    final(callback){
        console.log("Stream finalizado...");
        callback();
    }
});

duplex.write(`Hola soy Matias! \n`);
duplex.write(`Hola esto es un Eco. \n`);

duplex.on("data", (chunk) => {
    console.log(`Datos leeidos: ${chunk.toString()}`);
})

duplex.end();









