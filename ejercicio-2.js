const readline = require("node:readline")


const suma = (a, b) => {
    return a + b;
}
const resta = (a, b) => {
    return a - b;
}
const multiplicacion = (a, b) => {
    return a * b;
}
const division = (a, b) => {
    return a / b;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Que le parece esta calculadora de nodeJS? ", (answer) => {
    console.log("Aqui va la respuesta: ", answer);

    rl.close();
});







