/* Obtener registros SRV (Service) de un dominio:
Usa dns.resolveSrv() para obtener los registros SRV de un dominio.
Muestra la información del servicio en la consola. */ 

const dns = require("node:dns");

const domain = "google.com";

dns.resolveSrv(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener los registros SRV:", err);
    }else{
        console.log("Registros SRV:", data);
    }
});




