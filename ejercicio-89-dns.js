/* Obtener registros AAAA (IPv6) de un dominio:
Usa dns.resolve6() para obtener las direcciones IPv6 de un dominio.
Muestra las direcciones obtenidas en la consola. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolve6(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener las direcciones IPv6: ", err);
    }else{
        console.log("Direcciones IPv6 obtenidas:", data);
    }
});





