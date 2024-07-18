/* Contador de Visitas: Crea un servidor que cuente el número de veces que se ha 
accedido a la página y muestre ese número. */ 

const { count } = require("node:console");
const http = require("node:http");

const count = 0;

const server = http.createServer((req, res) => {
    if(res.statusCode === 200){
        count++;
    }    
    res.end(`Las veces que se visito esta pagina son: ${count}`);
});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor esta siendo escuchado en el puerto: ${port}`);
});


