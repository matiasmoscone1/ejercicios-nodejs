/* Eliminar un parámetro de una cadena de consulta: Dada una cadena de consulta, 
elimina un parámetro específico y vuelve a convertir el objeto resultante en 
una cadena de consulta. */
/*
const myURL = new URL("https://www.example.com/search?category=books&sort=asc&page=2&color=red");

myURL.searchParams.delete("color");

console.log(myURL);
*/
const querystring = require("node:querystring");
const myURL = "https://www.example.com/search?category=books&sort=asc&page=2&color=red";

const objURL = querystring.parse(myURL.split("?")[1]);

delete objURL.sort && delete objURL.color;

const filterURL = myURL.split("?")[0] + "?" + querystring.stringify(objURL);

console.log(filterURL);


