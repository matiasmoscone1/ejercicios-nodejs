/* Obtener todos los registros A de un dominio:
Usa dns.resolve4() para obtener todas las direcciones IPv4 asociadas a un dominio.
Muestra todas las direcciones IP en la consola. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolve4(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener las direcciones IPv4");
    }else{
        console.log("Direcciones IPv4 obtenidas:", data);
    }
});






