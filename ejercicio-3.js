/* Contador de Visitas: Crea un servidor que cuente el número de veces que se ha 
accedido a la página y muestre ese número. */ 

const http = require("node:http");

const server = http.createServer((req, res) => {
    

});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor esta siendo escuchado en el puerto: ${port}`);
});


