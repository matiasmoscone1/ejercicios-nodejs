/* Ejercicio 9: Implementa una función que tome una URL completa y devuelva un objeto 
con los componentes protocol, host, pathname, y search de la URL. */

// https://example.com:8080/search?query=nodejs&sort=asc&page=2&filter=active#section

const my_url = new URL("https://example.com:8080/search?query=nodejs&sort=asc&page=2&filter=active#section");

const my_object = new Object;

const getObject = (url) => {
    return new Promise((resolve) => {
        const arrProperty = ["protocol", "host", "pathname", "search"];

        arrProperty.forEach((prop) => {
            my_object[prop] = url[prop];
        });
        resolve();
    });
    
    //return(my_object);

}


getObject(my_url).then(() => console.log(my_object));


//console.log(getObject(my_url));


//console.log(my_url["host"]);

