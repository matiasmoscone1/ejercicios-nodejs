/* util.callbackify: Toma una función que retorna una promesa y conviértela en una 
función que usa callbacks utilizando util.callbackify. */

const util = require("node:util");

const functionPromise = () => {
    return(new Promise((resolve, reject) => {
        try{
            resolve(console.log("Promesa ejecutada correctamente!!!"));
        }catch(err){
            reject("Ha ocurrido un error al ejecutar la promesa...", err);
        }
    }))
}

const newFunctionPromise = util.callbackify(functionPromise);

newFunctionPromise((err, ret) => {
    if(err){
        console.log("Ocurrio un error en la callbackifacion de la promesa xd");
    }else{
        console.log("Se hizo correctamente el callbackify en la funcion!!!");
    }
})


