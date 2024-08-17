/* Manejo de Múltiples Eventos: Crea un EventEmitter que maneje dos eventos diferentes: 
encender y apagar. Imprime un mensaje diferente para cada evento cuando se emitan. */

const events = require("node:events");

const myEmitter = events.EventEmitter();


myEmitter.on("encender" || "apagar", () => {
    if("encender"){
        console.log("Evento encendido!!!");
    } 
    if("apagar"){
        console.log("Evento apagado...");
    }
});

myEmitter.emit("encender");
myEmitter.emit("apagar");


