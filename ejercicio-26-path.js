/* Comprobar si es absoluto: Dada una ruta, usa path.isAbsolute() para 
verificar si es una ruta absoluta o relativa. */

const path = require("node:path");


const my_path = "C:/Desktop/Practica Node/Ejercicios/ejercicio-25.js";
const my_path2 = "C:/Desktop/Practica Node/Ejercicios/ejercicio-25";
const my_path3 = "Desktop/Practica Node/Ejercicios/ejercicio-25.js"
const my_path4 = ".././Ejercicios/ejercicio-25.js";

console.log(path.isAbsolute(my_path));
//la extension del archivo no afecta si es o no una ruta absoluta
console.log(path.isAbsolute(my_path2));
console.log(path.isAbsolute(my_path3));
console.log(path.isAbsolute(my_path4));

