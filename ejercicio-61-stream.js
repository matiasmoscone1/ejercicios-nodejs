/* Stream de datos en tiempo real: Implementa un servidor HTTP que envíe un archivo grande 
de manera continua utilizando streams. El servidor debería poder manejar múltiples 
conexiones simultáneas sin bloquear el event loop. */

const http = require("node:http");
const fs = require("node:fs");

const PORT = process.env || 3000;

const server = http.createServer((req, res) => {
    


});


server.listen(PORT, () => {
    console.log("El servidor esta esuchando en el puerto: ", PORT);
})






