/* Detectar cambios en los servidores DNS configurados:
Usa dns.getServers() para obtener la lista de servidores DNS configurados en tu sistema.
Muestra la lista de servidores y observa si cambia después de un intervalo de tiempo 
(ejemplo: 10 segundos). */

const dns = require("node:dns");

const servers = dns.getServers();

console.log(servers);

setTimeout(() => {
    console.log(servers);
}, 5000);





