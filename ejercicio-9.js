/*
Crea un script en NodeJS que determine si una PC es veloz y si se puede mejorar

*/

const os = require("node:os");
const http = require("node:http");


const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        const info = {
            total_memory: os.totalmem(),
            cpus: os.cpus(),
            uptime: os.uptime(),
            loadvg: os.loadavg(),
            network_interference: os.networkInterfaces()
        }        
        res.end(JSON.stringify(info));
    }

});

server.listen(port, (err, info) => {
    if(err){
        throw new Error;
    }else{
        console.log("El servidor se esta escuchando en el puerto: ", port);
    }
});







