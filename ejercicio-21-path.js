/* Obtener el nombre del archivo: Dado un string con una ruta de archivo, utiliza 
path.basename() para obtener solo el nombre del archivo (incluyendo su extensión). */

const path = require("node:path");

const name = path.basename("C:/Users/matia/OneDrive/Desktop/Node JS/Ejercicios NodeJS/mensaje.txt");

console.log(name);
