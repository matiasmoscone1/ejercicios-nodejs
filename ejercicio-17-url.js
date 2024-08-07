/* Ejercicio 8: Dada una URL completa y un objeto de parámetros, construye una nueva URL 
que incluya esos parámetros adicionales. Por ejemplo, si tienes http://example.com/path 
y el objeto { foo: 'bar' }, la nueva URL debería ser http://example.com/path?foo=bar. */

const my_url = new URL("http://example.com/path");

const my_object = {foo: "bar", tema: "obscuro"};

/*for(let key in my_object){
    my_url.searchParams.append(key, my_object[key]);
}*/

//Object.keys(objeto) -> retorna un array con las propiedades del objeto
Object.keys(my_object).forEach((key) => {
    my_url.searchParams.append(key, my_object[key]);
});


console.log(my_url.href);

