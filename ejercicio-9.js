/*
Crea un script en NodeJS que determine si una PC es veloz y si se puede mejorar

*/

const os = require("node:os");
const http = require("node:http");
const checkDiskSpace = require("check-disk-space").default;


const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        checkDiskSpace("C:").then((diskSpace) => {
            const info = {
                /* total_memory: cantidad de RAM expresada en GB */
                total_memory: Number((os.totalmem() / 1024 / 1024 / 1024).toFixed(0)),
                /* cpus: array de objetos, que cada objeto es un nucleo donde muestra, 
                         speed: velocidad del procesador expresado en Mhz */ 
                cpus: os.cpus(),
                /* uptime: PC prendida expresada en dias */
                uptime: Number((os.uptime() / 86400).toFixed(0)),
                /* loadgvg: valores = al nro de nucleos -> estan ocupados pero no sobrecargados 
                            valores > al nro de nucleos realentizaciones severas */
                loadvg: os.loadavg(),
                network_interference: os.networkInterfaces(),
                /* disk_space: espacio en el disco */
                disk_space: {
                    total: Number((diskSpace.size / 1024 / 1024 / 1024).toFixed(0)),
                    free: Number((diskSpace.free / 1024 / 1024 / 1024).toFixed(0)),
                    used: Number(((diskSpace.size - diskSpace.free) / 1024 / 1024 / 1024).toFixed(0))
                }
            }       
            res.end(JSON.stringify(info)); 
            if(info.total_memory < 12){
                console.log("Recomendacion: Agregar memoria RAM.");
            }else if(info.uptime > 15){
                console.log("Recomendacion: Actualizar windows y reiniciar.")
            }else if(info.cpus[0].speed < 2000){
                console.log("Recomendacion: Cambiar procesador por uno mejor.")
            }
        })
        /* 
        BLOQUE COMPARATIVO
        */    
        

        

    }
    

});

server.listen(port, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log("El servidor se esta escuchando en el puerto: ", port);
    }
});







