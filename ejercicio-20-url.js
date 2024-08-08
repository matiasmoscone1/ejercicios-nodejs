/* Vas a crear un servidor en Node.js que funcione como un acortador de URLs, 
similar a servicios como Bit.ly.  */

const http = require("node:http");

const port = process.env.PORT || 3000;

const urlDatabase = {

};

const urlShortener = (url) => {
    const regExURL = /[+\/\-\\_]/;
    
    const arrPath = url.pathname.split(regExURL);
    let shortURL = "";
    arrPath.forEach((word) => {
        if(word.length > 1){
            shortURL += word[0];
        }
    })
    urlDatabase[shortURL] = url.pathname;
    return shortURL;

}

const server = http.createServer((req, res) => {
    
    if(req.url === "/"){
        res.end("Esta en pagina principal.");
    }

    if(req.url === "/matias-moscone-section-one"){
        res.end("Esta en la seccion 1 de matias moscone.");
    }

      
});

server.listen(port, () => {
    console.log("El servidor esta siendo escuchado en el puerto: ", port);

    const my_url = new URL(`http://localhost:${port}/matias-moscone-section-one`);
    console.log(urlShortener(my_url));
    console.log(urlDatabase);


});


