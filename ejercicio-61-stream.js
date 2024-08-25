/* Stream de datos en tiempo real: Implementa un servidor HTTP que envíe un archivo grande 
de manera continua utilizando streams. El servidor debería poder manejar múltiples 
conexiones simultáneas sin bloquear el event loop. */

const http = require("node:http");
const fs = require("node:fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    const file = "mensaje.txt";

    res.writeHead(200, {
        //"Content-Type": "application/octet-stream",
        //"Content-Disposition": `attachment; filename="${file}"`
        "Content-Type": "text/plain",
        "Content-Disposition": "inline"
    });

    const readableStream = fs.createReadStream(file);

    readableStream.pipe(res);

    readableStream.on("error", (err) => {
        console.log("Error al enviar el archivo: ", err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Error interno del servidor");
    });

    readableStream.on("end", () => {
        console.log("Archivo enviado correctamente!!!");
    });

});


server.listen(PORT, () => {
    console.log("El servidor esta esuchando en el puerto: ", PORT);
})






