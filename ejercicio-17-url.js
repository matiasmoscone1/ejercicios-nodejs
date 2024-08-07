/* Ejercicio 8: Dada una URL completa y un objeto de parámetros, construye una nueva URL 
que incluya esos parámetros adicionales. Por ejemplo, si tienes http://example.com/path 
y el objeto { foo: 'bar' }, la nueva URL debería ser http://example.com/path?foo=bar. */

const my_url = new URL("http://example.com/path");

const my_object = {foo: "bar", tema: "obscuro"};

my_url.searchParams.append(Object.keys(my_object), my_object.foo);

console.log(Object.keys(my_object));
console.log(my_url);