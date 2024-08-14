/* Comparar contraseñas hash: Crea una función que reciba una contraseña en texto plano y 
su versión hasheada, y verifique si coinciden utilizando el algoritmo SHA-512. */

const crypto = require("node:crypto");
const rl = require("node:readline");
//const password = "hola123";
//const hashedPass = crypto.createHash("sha512").update(password).digest("hex");
const dataBase = {
    pass: "31583cff658e71e493ba40d3161b492d1fb10bc70c4faa8c498c7f356c7418fbbbd630a0771a3a71f873c8b1b291bee93e32ddff6bb57c1ca77e2945b6fc0531",
}

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});


interface.question("Ingrese la contraseña: ", (answer) => {
    const hash = crypto.createHash("sha512").update(answer).digest("hex");
    if(hash === dataBase.pass){
        console.log("Contraseña aceptada con exito!!!");
    }else{
        console.log("Contraseña no coincide...");
    }
    interface.close();
});






