/* Remover Listeners: Crea un EventEmitter con un listener que imprima un mensaje 
al escuchar el evento mensaje. Luego, elimina el listener y emite el evento de 
nuevo para comprobar que ya no se escucha. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();

const saludo = () => {
    console.log("Evento saludo activo!!!");
}

myEmitter.on("saludo", saludo);

myEmitter.emit("saludo");

myEmitter.removeListener("saludo", saludo);

myEmitter.emit("saludo");





