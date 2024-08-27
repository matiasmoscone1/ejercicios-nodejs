/* Ejecutar un script de Node.js desde otro script de Node.js: Usa child_process.spawn 
para ejecutar un archivo script.js y muestra su salida. */

const child_process = require("node:child_process");


const child = child_process.spawn("node", ["script.js"]);

child.stdout.on("data", (data) => {
    console.log("El resultado es: ", data.toString());
});

child.stderr.on("data", (data) => {
    console.log("Hubo un error al ejecutar el archivo: ", data);
});

child.on("close", (data) => {
    console.log("Se ha terminado la ejecuccion del proceso hijo: ", data);
});



