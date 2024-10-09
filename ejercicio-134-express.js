/* WebSockets con socket.io: Crea una aplicación en tiempo real que use WebSockets para 
enviar mensajes en tiempo real. */

const express = require("express");
const app = express();
require("dotenv").config();
const { Server } = require("socket.io");

const port = process.env.PORT || 4000;

const io = new Server(app);

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/chatSocket.html`);
});

io.on("connection", (socket) => {
    console.log("Se ha conectado un usuario!");
})



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

