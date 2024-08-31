/* Obtener registros TXT de un dominio:
Usa dns.resolveTxt() para obtener los registros TXT de un dominio.
Muestra el contenido de los registros en la consola. */

const dns = require("node:dns");

const domain = "google.com";

dns.resolveTxt(domain, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al obtener los registros TXT: ", err);
    }else{
        console.log("Registros TXT:", data);
    }
});



