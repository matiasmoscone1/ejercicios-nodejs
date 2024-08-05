/* Ejercicio 2: Crea una URL a partir de un objeto que contenga el protocolo, host, path y 
parámetros de consulta. Asegúrate de que la URL generada sea válida. */

const objectURL = {
    protocol: "https:",
    host: "example.com:8080",
    path: "/search",
    searchParam: {query: "nodejs", sort:"asc", filter:"desactive"}
}

const my_url = new URL(objectURL.protocol+objectURL.host+objectURL.path);

console.log(my_url.href);


