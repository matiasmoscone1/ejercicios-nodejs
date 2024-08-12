/* Parsear una cadena de consulta: Dada una cadena de consulta, utiliza querystring.parse() 
para convertirla en un objeto de JavaScript. */

// name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&active=true&education[degree]=Bachelor&education[major]=ComputerScience

const querystring = require("node:querystring");

const my_query = "name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&active=true&education[degree]=Bachelor&education[major]=ComputerScience";

console.log(querystring.parse(my_query));






