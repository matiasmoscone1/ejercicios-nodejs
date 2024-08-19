/* Encadenamiento de Listeners: Emite un evento llamado procesar que pase por tres 
listeners diferentes, cada uno realizando una operación sobre un valor inicial. 
El primer listener multiplica el valor por 2, el segundo le suma 10, y el tercero 
imprime el resultado final. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();

let value = 10;

// se ejecutara siempre primero este listener
myEmitter.prependListener("procesar", () => {
    value = value + 5;
});

myEmitter.on("procesar", () => {
    value = value * 2;
}).on("procesar", () => {
    value = value + 10;
}).on("procesar", () => {
    console.log("El resultado es: ", value);
});
 
myEmitter.emit("procesar");



