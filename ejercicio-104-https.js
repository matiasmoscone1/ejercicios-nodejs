/* Implementar manejo de errores en solicitudes HTTPS:
Crea un programa que maneje correctamente los errores al hacer solicitudes HTTPS a un 
servidor externo (por ejemplo, manejo de errores de red, tiempos de espera, etc.). */

const https = require("node:https");

const options = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/users",
    method: "GET"
};

const req = https.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
        data += chunk;
        console.log(data.toString());
    });
    res.on("error", (err) => {
        console.log("Ha ocurrido un error:", err);
    })
});

req.end();


