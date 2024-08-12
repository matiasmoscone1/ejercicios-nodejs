/* Parsear una cadena de consulta: Dada una cadena de consulta, utiliza querystring.parse() 
para convertirla en un objeto de JavaScript. */

// name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&active=true&education[degree]=Bachelor&education[major]=ComputerScience

const querystring = require("node:querystring");

const myQuery = "name=JohnDoe&age=29&city=NewYork&skills=JavaScript,Node.js,React&active=true&education[degree]=Bachelor&education[major]=ComputerScience";

const parsedQuery = querystring.parse(myQuery);

//console.log(parsedQuery);

const education = {
    degree: parsedQuery["education[degree]"],
    major: parsedQuery["education[major]"]
};

delete parsedQuery["education[degree]"];
delete parsedQuery["education[major]"];

parsedQuery.education = education;

console.log(parsedQuery);


