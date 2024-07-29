/* 
Crea una aplicación en NodeJS que utilice el módulo os para proporcionar información 
sobre el sistema operativo y el entorno en el que se está ejecutando la aplicación. 
El servidor debe tener dos rutas:
GET /system-info: Devuelve un JSON con la siguiente información:
GET /uptime: Devuelve un JSON con el tiempo de actividad del sistema (en segundos) 
desde que se inició el sistema.
*/

const http = require("node:http");
const os = require("node:os");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
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






