/* Hacer solicitudes GET y POST a un servidor HTTPS externo:
Usa el módulo https para realizar solicitudes GET y POST a un servidor HTTPS externo, 
como una API pública, y maneja la respuesta en tu aplicación. */

//https://jsonplaceholder.typicode.com/

const https = require("node:https");


https.get("https://jsonplaceholder.typicode.com/users", (res) => {
    //console.log(res);
    res.on("data", (data) => {
        console.log(data.toString());
    });
})





