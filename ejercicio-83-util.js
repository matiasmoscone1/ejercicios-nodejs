/* util.isDeepStrictEqual: Escribe una función que compare dos objetos utilizando 
util.isDeepStrictEqual para verificar si son profundamente iguales. */

const util = require("node:util");

const compareObjects = (obj, obj2) => {

    if(util.isDeepStrictEqual(obj, obj2)){
        console.log("Los objetos son profundamente iguales!!!");
    }else{
        console.log("Los objetos NO son profundamente iguales...");
    }
}

const objeto1 = {
    nombre: "Carlos",
    edad: 30,
    direccion: {
      calle: "Av. Principal",
      numero: 123,
      ciudad: "Madrid"
    },
    hobbies: ["leer", "correr", "cocinar"]
};

const objeto2 = {
    nombre: "Lucía",
    edad: 25,
    direccion: {
        calle: "Calle Secundaria",
        numero: 456,
        ciudad: "Barcelona"
    },
    hobbies: ["escribir", "nadar", "viajar"]
};


compareObjects(objeto1, objeto2);




