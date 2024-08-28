/* Gestionar la salida estándar y la salida de errores de un proceso hijo por separado: 
Usa child_process.spawn para ejecutar un comando y captura tanto stdout como stderr 
por separado. */

const child_process = require("node:child_process");

const command = "ipconfig";
const child = child_process.spawn(command);

child.stdout.on("data", (data) => {
    console.log(`Resuldao del comando ${command}: ${data}`);
});

child.stderr.on("data", (err) => {
    console.log(`Error al ejecutar el comando ${command}: ${err}`);
});

child.on("error", (err) => {
    console.log(`Error al ejecutar el comando ${command}: ${err.message}`);
});

