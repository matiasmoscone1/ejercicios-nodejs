/* Bonus: Manejo de errores en consultas DNS:
Crea un programa que maneje correctamente los errores cuando una consulta DNS falla, usando 
try/catch o la función de callback de dns para capturar errores.
Prueba con un dominio inexistente y muestra un mensaje de error adecuado. */

const dns = require("node:dns");

const domain = "google.com";
/*
const getDomain = () => {    
    dns.resolve(domain, (err, data) => {
        console.log("Resultado:", data);
        if(err){
            console.log(`Ha ocurrido un error al obtener la IP del dominio ${domain}:`, err);
        }
    }); 
}

getDomain();*/

const getDomain = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve(dns.resolve(domain));
        }catch(err){
            console.log("Ha ocurrido un error:", err);
        }
    });
}








