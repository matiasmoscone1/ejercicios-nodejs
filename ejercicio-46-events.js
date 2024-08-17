/* Emisión y Escucha Básica: Crea un EventEmitter, emite un evento llamado saludo y 
escucha ese evento para imprimir un mensaje en la consola. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();

myEmitter.on("saludo", () => {
    console.log("Hola estoy saludando!!!");
});

myEmitter.on("saludo", () => {
    console.log("Hola estoy saludando nuevamente!!!!");
});

myEmitter.addListener("saludo", () => {
    console.log("Hola estoy saludando nuevamente!!!!");
});

myEmitter.emit("saludo");

