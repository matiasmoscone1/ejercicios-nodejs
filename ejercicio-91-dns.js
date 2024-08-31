/* Resolver un nombre de dominio desde una dirección IP (Reverse DNS):
Usa dns.reverse() para resolver el nombre de dominio asociado a una dirección IP específica.
Muestra el nombre de dominio en la consola. */

const dns = require("node:dns");

const ip = "142.251.134.14";

dns.reverse(ip, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener el dominio: ", err);
    }else{
        console.log("Resultado:", data);
    }
});



