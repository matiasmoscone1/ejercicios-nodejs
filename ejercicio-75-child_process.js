/* Ejecutar un script y pasarle argumentos desde el proceso padre: Usa child_process.spawn 
para ejecutar un script con argumentos y muestra cómo se reciben esos argumentos en el 
script hijo. */

const child_process = require("node:child_process");

const child = child_process.spawn("node", ["script-suma.js"]);

child.stdout.on("data", (data) => {
    console.log("Resultado: ", data);
});

child.stderr.on("data", (data) => {
    console.log("Error al ejecutar el archivo: ", data);
});

child.on("error", (err) => {
    console.log("Ha ocurrido un error: ", err);
});



