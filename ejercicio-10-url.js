/* Analiza una URL dada y extrae su protocolo, host, path, y parámetros de consulta. 
Imprime cada uno de estos componentes. https://nodejs.org/api/url.html */

//const url = require("node:url"); -> obsoleto, ahora se usa el constructor global de node URL

const my_url = new URL("https://nodejs.org/api/url.html");


console.log(my_url);





