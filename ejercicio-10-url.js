/* Analiza una URL dada y extrae su protocolo, host, path, y parámetros de consulta. 
Imprime cada uno de estos componentes. https://nodejs.org/api/url.html */

//const url = require("node:url"); -> obsoleto, ahora se usa el constructor global de node URL

const my_url = new URL("https://example.com:8080/search?query=nodejs&sort=asc&page=2&filter=active");

console.log(my_url);

console.log(` Host: ${my_url.host} \n Path: ${my_url.pathname} \n Parametros: ${my_url.searchParams}`);




