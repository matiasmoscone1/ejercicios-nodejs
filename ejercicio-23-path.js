/* Normalizar una ruta: Dada una ruta que incluye segmentos como .. o ./, usa 
path.normalize() para convertirla en una ruta más simple y sin redundancias. */

const path = require("node:path");

const my_path = "C:\matia/user//docs/./../documents/./project/../files//test.txt";

console.log(path.normalize(my_path));

