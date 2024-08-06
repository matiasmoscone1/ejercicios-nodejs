/* Ejercicio 7: Extrae y muestra solo el nombre del dominio de una URL completa. 
Por ejemplo, para http://www.example.com/path, deberías obtener www.example.com. */

//const my_url = new URL("http://www.example.com:8080/path");
const my_url = new URL("http://www.example.com/path");

console.log(my_url.hostname);






