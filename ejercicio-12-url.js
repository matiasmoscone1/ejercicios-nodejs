/* Ejercicio 3: Dada una URL con parámetros de consulta, extrae los valores de esos 
parámetros y conviértelos en un objeto JavaScript. Por ejemplo, para la URL 
http://example.com?name=John&age=30, el objeto resultante 
debería ser { name: 'John', age: '30' }. */

const my_url = new URL("http://example.com?name=John&age=30");

const my_object = new Object;

console.log(my_url.searchParams.keys());
console.log(my_url.searchParams.values());

my_url.searchParams.forEach((key, value) => {
    console.log(value,key);
});


