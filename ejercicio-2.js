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


rl.question("Escriba el primer numero: ", (answer) => {
    rl.question("Escriba el segundo numero: ", (answer2) => {
    rl.question(`Escriba la operacion: \n Suma: suma()\n Resta: 
    resta()\n Multiplicacion: multiplicacion()\n Division: division()`, (operacion) => {
        if(operacion === "suma"){
            console.log("Resultado: ", answer + answer2);
        }
    })
})
});

/*
const segundoNum = rl.question("Escriba el segundo numero: ", (answer) => {
    console.log("Aqui va la respuesta: ", answer);
});*/

//console.log(primerNum, segundoNum);








