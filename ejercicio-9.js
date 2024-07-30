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
                total_memory: os.totalmem(),
                cpus: os.cpus(),
                uptime: os.uptime(),
                loadvg: os.loadavg(),
                network_interference: os.networkInterfaces(),
                disk_space: {
                    total: diskSpace.size,
                    free: diskSpace.free,
                    used: diskSpace.size - diskSpace.free
                }
            }       
            res.end(JSON.stringify(info)); 
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







