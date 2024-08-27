/* Crear un proceso hijo que se comunique con el proceso padre mediante un canal 
de comunicación: Usa child_process.fork para crear un proceso hijo que se 
comunique con el proceso padre enviando y recibiendo mensajes. */

const child_process = require("node:child_process");

const child = child_process.fork("child.js");

child.send("Hola soy proceso padre, envio este mensaje a proceso hijo");

child.on("message", (message) => {
    console.log("Mensaje recibido del proceso hijo: ", message);
});





