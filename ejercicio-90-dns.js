/* Obtener registros MX (Mail Exchange) de un dominio:
Usa dns.resolveMx() para obtener los registros MX de un dominio.
Muestra la lista de servidores de correo y sus prioridades. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolveMx(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener los registros MX: ", err);
    }else{
        console.log("Registros MX:", data);
    }
});






