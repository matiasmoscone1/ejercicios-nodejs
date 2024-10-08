/* Ejercicio 10: Extrae y decodifica los parámetros de consulta de una URL que contiene 
valores codificados en URL. Por ejemplo, para http://example.com/?name=John%20Doe&age=30, 
el objeto resultante debería ser { name: 'John Doe', age: '30' }. */

//decodeURIComponent

const my_url = new URL("http://example.com/?name=John%20Doe&age=30");

const my_object = new Object;

my_url.searchParams.forEach((value, key) => {
    my_object[key] = decodeURI(value);
});

console.log(my_object);



