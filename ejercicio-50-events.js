/* Contador de Eventos: Crea un EventEmitter que cuente cuántas veces se ha emitido 
un evento llamado click. Imprime el número de veces que el evento ha sido emitido 
cada vez que se emite. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();

let count = 0;
myEmitter.on("click", () => {
    count++;
    console.log("Evento emitido: ", count);
});

myEmitter.emit("click");
myEmitter.emit("click");
myEmitter.emit("click");


