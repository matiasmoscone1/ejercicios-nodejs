/* Vas a crear un servidor en Node.js que funcione como un acortador de URLs, 
similar a servicios como Bit.ly.  */

const http = require("node:http");

const port = process.env.PORT || 3000;


const urlShortener = (url) => {
    const regExURL = /[+\/\-\\_]/;
    
    url.pathname.split("").forEach((letter) => {
        if(regExURL.test(letter)){
            console.log("separador");
        }    
    }) 
    /*
    if(regExURL.test(url.pathname)){
        console.log("separador");
    }*/

    //console.log(url);    

}

const server = http.createServer((req, res) => {
    res.end("Servidor listo");

      
});

server.listen(port, () => {
    console.log("El servidor esta siendo escuchado en el puerto: ", port);

    const my_url = new URL(`http://localhost:${port}/matias-moscone-section-one`);
    urlShortener(my_url);

    //console.log(my_url);


});


