/* Ejercicio 5: Dada una URL con un fragmento (hash), elimina el fragmento y devuelve 
la URL sin él. Por ejemplo, para http://example.com/page#section, la URL resultante 
debería ser http://example.com/page. */


const my_url = new URL("http://example.com/page#section");

my_url.hash = "";

console.log(my_url.href);



