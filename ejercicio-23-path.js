/* Normalizar una ruta: Dada una ruta que incluye segmentos como .. o ./, usa 
path.normalize() para convertirla en una ruta más simple y sin redundancias. */

const path = require("node:path");

const my_path = "C:\matia/user//docs/./../documents/./project/../files//test.txt";
const my_path2 = "C:\matia/user/documents/home/../music/files/californication.mp3";

//console.log(path.normalize(my_path));

const relativePath = path.relative(path.normalize(my_path), path.normalize(my_path2));

console.log(`Ruta 1: ${path.normalize(my_path)}`);
console.log(`Ruta 2: ${path.normalize(my_path2)}`);

console.log(relativePath);
