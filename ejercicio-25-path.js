/* Formar una ruta desde partes: Utiliza path.format() para crear una ruta a partir de un 
objeto que contiene las partes de una ruta (como las obtenidas en el ejercicio anterior). */

const path = require("node:path");

const my_object = {
    root: "C:/",
    dir: "C:/Desktop/Practica Node/Ejercicios",
    base: "ejercicio-25.js",
    ext: ".js",
    name: "ejercicio-25"
}

const my_path = path.format(my_object);

//corrigiendo el separador de directorios y archivos, como estoy en windows 
//utiliza el separador "\", asique lo corregimos con replace y una regEx
console.log(my_path.replace(/\\/g, "/"));

//console.log(path.normalize(my_path));
