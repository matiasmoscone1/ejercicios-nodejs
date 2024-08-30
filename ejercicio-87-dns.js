/* 1. Resolver una dirección IP desde un nombre de dominio:
Usa dns.lookup() para resolver la dirección IP de un dominio como example.com.
Muestra la dirección IP obtenida en la consola. */

const dns = require("node:dns");

const domain = "google.com";

dns.lookup(domain, (err, data) => {
    if(err){
        console.log(`Ha ocurrido un error al conseguir la ip del dominio ${domain}`);
    }else{
        console.log("Resultado:", data);
    }
});


