/* Emitir con Argumentos: Emite un evento llamado sumar que reciba dos números como argumentos, 
y luego escucha el evento para sumar los números e imprimir el resultado. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();


myEmitter.on("sumar", (a, b) => {
    console.log("Resultado:", a + b);
});

myEmitter.emit("sumar", 30, 20);




