/* Crear un proceso hijo y finalizarlo de manera programática: Usa child_process.spawn 
para iniciar un proceso y luego termina el proceso hijo usando process.kill. */

const child_process = require("node:child_process");

const child = child_process.spawn("ping", ["google.com"]);


child.stdout.on("data", (data) => {
    console.log("Resultado: ", data.toString());
});

child.stderr.on("data", (data) => {
    console.log("Error en la ejecucion del proceso: ", data);
});

child.on("error", (err) => {
    console.log("Ha ocurrido un error: ", err);
});

setTimeout(() => {
    child.kill();
    console.log("Proceso ha finalizado...");
}, 2000);


