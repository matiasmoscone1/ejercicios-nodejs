/* Modificar un parámetro en una cadena de consulta: Dada una cadena de consulta, 
utiliza querystring.parse() para modificar uno de sus parámetros y luego 
conviértela de nuevo a una cadena usando querystring.stringify(). */

const querystring = require("node:querystring");

const myURL = "https://www.example.com/search?category=books&sort=asc&page=2&color=red"

const parsedQuery = myURL.split("?")[1]querystring.parse(myURL);

console.log(parsedQuery);


