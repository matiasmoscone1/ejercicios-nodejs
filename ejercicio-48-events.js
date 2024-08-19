/* Manejo de Múltiples Eventos: Crea un EventEmitter que maneje dos eventos diferentes: 
encender y apagar. Imprime un mensaje diferente para cada evento cuando se emitan. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();


myEmitter.on("encender", () => {
    console.log("Evento de encendido!!!");
});

myEmitter.on("apagar", () => {
    console.log("Evento de apagado...");
});


myEmitter.emit("encender");
myEmitter.emit("apagar");


