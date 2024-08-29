/* util.types.isPromise: Escribe una función que verifique si un objeto dado es una 
promesa utilizando util.types.isPromise. */

const util = require("node:util");

const promesa = new Promise((resolve, reject) => {
    try{
        resolve(console.log("Promesa resuelta correctamente"));
    }catch(err){
        reject(console.log("Ha ocurrido un error: ", err));
    }
});
/*
promesa.then((data) => {
    console.log("Promesa se ejecuto!!!", data);
});*/


const object = {nombre: "Matias"};

console.log(util.types.isPromise(promesa));






