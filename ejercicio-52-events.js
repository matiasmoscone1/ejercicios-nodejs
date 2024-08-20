/* Propagación de Errores: Emite un evento que provoque un error y maneja ese error 
usando el evento error de EventEmitter. */

const events = require("node:events");

const myEmitter = new events.EventEmitter();


myEmitter.on("error", (err) => {
    console.error("Ocurrio un error: ", err);
});

myEmitter.on("saludo", () => {
    console.log("Saludo enviado...");
})

myEmitter.emit("error");









