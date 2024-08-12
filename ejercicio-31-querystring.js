/* Agregar parámetros a una URL existente: Dada una URL con una cadena de consulta, usa 
querystring.stringify() para agregar nuevos parámetros sin sobrescribir los existentes. */

//https://example.com/search?category=books&sort=asc&page=2

const querystring = require("node:querystring");


const myURL = new URL("https://example.com/search?category=books&sort=asc&page=2");
/*
//console.log(myURL.searchParams.append("color", "red"));

myURL.searchParams.append("color", "red")
*/
//console.log(myURL);

const newParams = querystring.stringify({color: "red", adress: "Montevideo 493"});

console.log(myURL.href+newParams);

//console.log(querystring.parse("https://example.com/search?category=books&sort=asc&page=2"));





