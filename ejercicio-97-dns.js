/* Bonus: Manejo de errores en consultas DNS:
Crea un programa que maneje correctamente los errores cuando una consulta DNS falla, usando 
try/catch o la función de callback de dns para capturar errores.
Prueba con un dominio inexistente y muestra un mensaje de error adecuado. */

const dns = require("node:dns/promises");

const domain = "goodfgdfgle.com";
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

const getDomain = async () => {
    try{
        const ip = await dns.resolve(domain);
        console.log("Resultado:", ip);
    }catch(err){
        console.log("Ha ocurrido un error:", err.message);
    }
}

getDomain();








