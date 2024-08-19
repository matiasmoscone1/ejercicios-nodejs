/* Escuchar un Evento una Única Vez: Emite un evento llamado bienvenida que solo se 
escuche una vez utilizando el método once. Asegúrate de que, aunque emitas el evento 
varias veces, solo se escuche una vez. */


const events = require("node:events");

const myEmitter = new events.EventEmitter();


myEmitter.once("bienvenida", () => {
    console.log("Este evento se ejecuto una sola vez.");
});

myEmitter.emit("bienvenida");
myEmitter.emit("bienvenida");
myEmitter.emit("bienvenida");
myEmitter.emit("bienvenida");




