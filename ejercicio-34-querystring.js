/* Manejo de caracteres especiales en los valores: Usa querystring.stringify() y 
querystring.parse() para trabajar con valores que contienen caracteres especiales 
(por ejemplo, &, =, %). */

const querystring = require("node:querystring");

const params = {
    name: 'John Doe',
    city: 'New York & Boston',
    email: 'john.doe@example.com?subject=Hello',
};

const stringifyParams = querystring.stringify(params);

console.log(stringifyParams);
console.log(querystring.unescape(stringifyParams));

const parsedParams = querystring.parse(stringifyParams);

console.log(parsedParams);