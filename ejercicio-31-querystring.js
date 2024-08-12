/* Agregar parámetros a una URL existente: Dada una URL con una cadena de consulta, usa 
querystring.stringify() para agregar nuevos parámetros sin sobrescribir los existentes. */

//https://example.com/search?category=books&sort=asc&page=2

const querystring = require("node:querystring");

//const myURL = new URL("https://example.com/search?category=books&sort=asc&page=2");

const parsedQuery = querystring.parse("https://example.com/search?category=books&sort=asc&page=2".split("?")[1]);

parsedQuery.color = "red";
parsedQuery.address = "Montevideo 323";

//console.log(parsedQuery);

const constructMyURL2 = querystring.stringify(parsedQuery);

const constructMyURL = "https://example.com/search?category=books&sort=asc&page=2".split("?")[0];

const myURL = new URL(constructMyURL+"?"+constructMyURL2);

console.log(constructMyURL);
console.log(constructMyURL2);
console.log(myURL);
