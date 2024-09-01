/* Detectar cambios en los servidores DNS configurados:
Usa dns.getServers() para obtener la lista de servidores DNS configurados en tu sistema.
Muestra la lista de servidores y observa si cambia después de un intervalo de tiempo 
(ejemplo: 10 segundos). */

const dns = require("node:dns");

const servers = dns.getServers();

console.log(servers);
dns.resolve("google.com", (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener la ip:", err);
    }else{
        console.log("Ip:", data);
    }
    dns.setServers(data);
});


setTimeout(() => {
    console.log(servers);
}, 5000);





