/* Ejercicio 2: Crea una URL a partir de un objeto que contenga el protocolo, host, path y 
parámetros de consulta. Asegúrate de que la URL generada sea válida. */

const objectURL = {
    protocol: "https:",
    host: "example.com:8080",
    path: "/search",
    searchParam: {query: "nodejs", sort:"asc", filter:"desactive"}
}

const my_url = new URL(`${objectURL.protocol}${objectURL.host}${objectURL.path}?
${Object.keys(objectURL.searchParam)[0]}=${objectURL.searchParam.query}&
${Object.keys(objectURL.searchParam)[1]}=${objectURL.searchParam.sort}&
${Object.keys(objectURL.searchParam)[2]}=${objectURL.searchParam.filter}`);

console.log(my_url.href);




