/* Obtener el nombre del archivo: Dado un string con una ruta de archivo, utiliza 
path.basename() para obtener solo el nombre del archivo (incluyendo su extensión). */

const path = require("node:path");

const fileName = path.basename("C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS/mensaje.txt");
const dirName = path.dirname("C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS/mensaje.txt")
const extName = path.extname("C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS/mensaje.txt");

console.log(`Nombre del directorio: ${dirName} \nNombre del archivo: ${fileName} \nNombre de la extension: ${extName}`);

const part1 = "C:/Users/matia/OneDrive/";
const part2 = "Desktop/Node JS/"
const part3 = "Ejercicios NodeJS/mensaje.txt";

const completePath = path.join(part1, part2, part3);
console.log(completePath);

