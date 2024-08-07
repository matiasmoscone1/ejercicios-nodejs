/* Ejercicio 9: Implementa una función que tome una URL completa y devuelva un objeto 
con los componentes protocol, host, pathname, y search de la URL. */

// https://example.com:8080/search?query=nodejs&sort=asc&page=2&filter=active#section

const my_url = new URL("https://example.com:8080/search?query=nodejs&sort=asc&page=2&filter=active#section");


const getObject = (url) => {
    const my_object = new Object;
    

    console.log(my_url);

}

getObject(my_url);