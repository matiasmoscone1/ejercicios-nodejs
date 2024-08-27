/* Leer la salida estándar de un proceso hijo en tiempo real: Utiliza child_process.spawn 
para ejecutar ping google.com y muestra la salida en tiempo real a medida que se recibe. */

const child_process = require("node:child_process");

const child = child_process.spawn("ping", ["google.com"]);

child.stdout.on("data", (data) => {
    console.log("Resultado: ", data.toString());
});

child.stderr.on("error", (err) => {
    console.log("Ocurrio un error en el proceso hijo: ", err);
});

child.on("close", () => {
    console.log("El proceso hijo ha terminado con exito.");
});



