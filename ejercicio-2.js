const rl = require("node:readline")


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

rl.question("Que le parece esta calculadora de nodeJS?", (answer) => {
    console.log("Aqui va la respuesta: ", answer);

    rl.close();
});







