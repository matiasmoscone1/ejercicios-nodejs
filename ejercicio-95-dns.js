/* Consultar un servidor DNS específico:
Usa dns.resolve() con la opción resolver.setServers() para consultar un servidor DNS 
específico en lugar de usar el predeterminado.
Resuelve un dominio y muestra el resultado utilizando el servidor DNS personalizado. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolve(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error en obtener la IP:", err);
    }else{
        console.log("Resultado:", data);
    }
    const res = new dns.Resolver();

    console.log(res.setServers(data));

    console.log("Servidores DNS configurados: ", res.getServers());
});





