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

//cargando modulos 
const http = require("node:http");
const os = require("node:os");

//Si existe una variable de entorno que sea puerto, utiliza esa, sino el puerto sera 3000
const port = process.env.PORT || 3000;

//creando servidor
const server = http.createServer((req, res) => {
    //url y creando objeto con datos del sistema operativo
    if(req.url === "/system-info"){
        const info = {
            name: os.release(),
            version: os.version(),
            arch: os.arch(),
            total_memory: {
                            value: Math.floor(os.totalmem() / 1024 / 1024 / 1000),
                            unit: "GB"},
            free_memory: {
                            value: Math.floor(os.freemem() / 1024 / 1024 / 1000),
                            unit: "GB"},
            cpus_free: os.cpus(),
            hostname: os.hostname() 
        };
        //respuesta del servidor convertido el objeto en JSON para poder mostrarlo
        res.end(JSON.stringify(info));
    }else if(req.url === "/uptime"){
        const info2 = {
            time: Number(os.uptime().toFixed(0)),
            unit: "Seconds"
        }
        res.end(JSON.stringify(info2));
    }else if(req.url === "/"){
        res.end("Pagina principal");
    }


});

//escucha del servidor
server.listen(port, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log("El servidor se esta escuchando en el puerto: ", port);

    }
})






