const readline = require("node:readline")


const suma = (a, b) => {
    return Number(a) + Number(b);
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
    rl.question(`\nsuma\nresta\nmultiplicacion\ndivision\nEscriba la operacion: `, (operacion) => {
        if(operacion === "suma"){
            console.log("Resultado: ", suma(answer, answer2));
        }else if(operacion === "resta"){
            console.log("Resultado: ", resta(answer, answer2));
        }
        else if(operacion === "multiplicacion"){
            console.log("Resultado: ", multiplicacion(answer, answer2));
        }else if(operacion === "division"){
            console.log("\nResultado: ", division(answer, answer2));
        }
        rl.close();
    });
    });
});



/*
const segundoNum = rl.question("Escriba el segundo numero: ", (answer) => {
    console.log("Aqui va la respuesta: ", answer);
});*/

//console.log(primerNum, segundoNum);








