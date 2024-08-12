/* Manejo de parámetros duplicados: Dada una cadena de consulta con parámetros duplicados, 
usa querystring.parse() para ver cómo se manejan los valores duplicados. */

//name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&name=MatiasMoscone&active=true&education[degree]=Bachelor&education[major]=ComputerScience

const querystring = require("node:querystring");

const query = "name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&name=MatiasMoscone&active=true&education[degree]=Bachelor&education[major]=ComputerScience";

const parsedQuery = querystring.parse(query);

console.log(parsedQuery);




