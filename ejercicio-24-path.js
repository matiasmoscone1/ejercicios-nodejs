/* Separar ruta en partes: Usa path.parse() para descomponer una ruta en sus 
partes (directorio, nombre base, extensión, etc.). */

const path = require("node:path");

const my_path = "C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS/mensaje.txt";

const parse_my_path = path.parse(my_path);


console.log(`\nRoot: ${parse_my_path.root} \nDir: ${parse_my_path.dir} \nBase: ${parse_my_path.base} \nExt: ${parse_my_path.ext} \nName: ${parse_my_path.name}`);




