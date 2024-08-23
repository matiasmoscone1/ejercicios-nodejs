/* Eventos Anidados: Crea un EventEmitter que emita un evento iniciar, el cual a su vez emita 
otro evento procesar. Este último debe emitir un evento finalizar cuando termine. 
Asegúrate de que cada evento desencadene el siguiente, y cada uno imprima un mensaje diferente. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();

myEmitter.on("iniciar", () => {
    console.log("Evento iniciar activado!!!");
    myEmitter.emit("procesar");
});

myEmitter.on("procesar", () => {
    console.log("Evento procesar activado!!!");
    myEmitter.emit("finalizar");
});

myEmitter.on("finalizar", () => {
    console.log("Eventos finalizados...");
});

myEmitter.emit("iniciar");







