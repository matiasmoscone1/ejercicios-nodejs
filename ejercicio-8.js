/* 
Crea una aplicación en NodeJS que utilice el módulo os para proporcionar información 
sobre el sistema operativo y el entorno en el que se está ejecutando la aplicación. 
El servidor debe tener dos rutas:
GET /system-info: Devuelve un JSON con la siguiente información:
Nombre del sistema operativo
Versión del sistema operativo
Arquitectura del procesador
Memoria total del sistema (en GB)
Memoria libre del sistema (en GB)
Número de CPUs disponibles
Información del hostname (nombre del host)
GET /uptime: Devuelve un JSON con el tiempo de actividad del sistema (en segundos) 
desde que se inició el sistema.
*/

const http = require("node:http");
const os = require("node:os");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if(req.url === "/system-info"){
        res.end({
            name: os.release(),
            version: os.version(),
            arch: os.arch(),
            total_memory: os.totalmem(),
            free_memory: os.freemem(),
            cpus_free: os.cpus(),
            hostname: os.hostname() 
        });
    }

    //res.end(info.json());
    
    res.end("Hola Mundo");
});

server.listen(port, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log("El servidor se esta escuchando en el puerto: ", port)
        console.log(info);
    }
})






