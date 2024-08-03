/*
Crea un script en NodeJS que determine si una PC es veloz y si se puede mejorar

*/

const os = require("node:os");
const si = require("systeminformation");
const http = require("node:http");
const checkDiskSpace = require("check-disk-space").default;


const port = process.env.PORT || 3000;


const getSystemTemperatures = async () => {
    const tempData = await si.cpuTemperature();
    return tempData.main;
};

const getRealTimeCPUUsage = async () => {
    const load = await si.currentLoad();
    return Number((load.currentLoad).toFixed(0));
};

const server = http.createServer(async (req, res) => {
    if(req.url === "/"){
        try{
        const diskSpace = await checkDiskSpace("C:");
            const info = {
                /* total_memory: cantidad de RAM expresada en GB */
                total_memory: Number((os.totalmem() / 1024 / 1024 / 1024).toFixed(0)),
                /* cpus: array de objetos, que cada objeto es un nucleo donde muestra, 
                         speed: velocidad del procesador expresado en Mhz */ 
                cpus: os.cpus(),
                /* uptime: PC prendida expresada en dias */
                uptime: Number((os.uptime() / 86400).toFixed(0)),
                /* loadavg: valores = al nro de nucleos -> estan ocupados pero no sobrecargados 
                            valores > al nro de nucleos realentizaciones severas */
                loadavg: os.loadavg(),
                /* disk_space: espacio en el disco */
                disk_space: {
                    total: Number((diskSpace.size / 1024 / 1024 / 1024).toFixed(0)),
                    free: Number((diskSpace.free / 1024 / 1024 / 1024).toFixed(0)),
                    used: Number(((diskSpace.size - diskSpace.free) / 1024 / 1024 / 1024).toFixed(0))
                },
                temperature: await getSystemTemperatures(),
                cpu_usage: await getRealTimeCPUUsage()
            }      

            if(info.total_memory < 12){
                console.log("Recomendacion: Agregar memoria RAM.");
            }else{
                console.log("RAM: ok.");
            }
            if(info.uptime > 15){
                console.log("Recomendacion: Actualizar windows y reiniciar.");
            }else{
                console.log("Uptime: ok.");
            }
            if(info.cpus[0].speed < 2000){
                console.log("Recomendacion: Cambiar procesador por uno mejor.");
            }else{
                console.log("Procesador: ok.");
            }
            if(info.loadavg[0] >= info.cpus.length){
                console.log("Recomendacion: Cambiar procesador por uno mejor.")
            }else{
                console.log("Carga CPU: ok.");
            }            
            if(info.disk_space.free < 15){
                console.log("Recomendacion: Libera espacio del disco.");
            }else{
                console.log("Disco: ok.");
            }
            if(info.cpu_usage > 80){
                console.log(`Recomendacion: Cierra aplicaciones innecesarias o pestañas del navegador, actualiza windows.
                                            Tambien puede desactivar servicios innecesarios o actualizar drivers del PC.`);
            }else{
                console.log("Uso CPU: ok");
            }
            res.end(JSON.stringify(info)); 

        } catch (err){
            res.writeHead("500", {"Content-Type": "text/plain"});
            res.end("No se pudo leer las caracteristicas del sistema", err);
        }

        

        

    }
    

});

server.listen(port, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log("El servidor se esta escuchando en el puerto: ", port);
    }
});







