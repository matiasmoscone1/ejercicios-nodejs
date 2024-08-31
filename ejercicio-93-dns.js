/* Obtener registros NS (Name Server) de un dominio:
Usa dns.resolveNs() para obtener la lista de servidores de nombres (NS) de un dominio.
Muestra los servidores de nombres en la consola. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolveNs(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener la lista de servidores: ", err);
    }else{
        console.log("Lista de servidores (NS):", data);
    }
});





