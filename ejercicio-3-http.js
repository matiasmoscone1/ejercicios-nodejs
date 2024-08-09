/* Contador de Visitas: Crea un servidor que cuente el número de veces que se ha 
accedido a la página y muestre ese número. */ 

//importa el modulo http
const http = require("node:http");

//crea variable contador
let count = 0;

// creando servidor con peticion y respuesta
const server = http.createServer((req, res) => {

    //si la peticion es en la raiz principal
    if(req.url === "/"){
        //aumenta la variable contador y muestra en pantalla las veces que se visito la pagina
        count++;
        res.end(`Las veces que se visito esta pagina son: ${count}`);
    }

});

//indica el puerto donde se levantara el servidor
const port = 3000;

//indica el puerto donde el servidor esta escuchando
server.listen(port, () => {
    console.log(`El servidor esta siendo escuchado en el puerto: ${port}`);
});




