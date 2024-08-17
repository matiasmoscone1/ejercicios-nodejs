/* Emitir con Argumentos: Emite un evento llamado sumar que reciba dos números como argumentos, 
y luego escucha el evento para sumar los números e imprimir el resultado. */

const events = require("node:events");
const rl = require("node:readline");
const myEmitter = new events.EventEmitter();


myEmitter.on("sumar", (a, b) => {
    console.log("Resultado:", a + b);
});

//myEmitter.emit("sumar", 30, 20);

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Escribe el primer numero: ", (answer) => {
    interface.question("Escribe el segundo numero: ", (answer2) => {
        myEmitter.emit("sumar", Number(answer), Number(answer2));
        interface.close();
    }); 
});





