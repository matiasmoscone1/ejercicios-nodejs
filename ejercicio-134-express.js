/* WebSockets con socket.io: Crea una aplicación en tiempo real que use WebSockets para 
enviar mensajes en tiempo real. */

const express = require("express");
const app = express();
const http = require("node:http");
require("dotenv").config();
const { Server } = require("socket.io");

const port = process.env.PORT || 4000;

const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/chatSocket.html`);
});

io.on("connection", (socket) => {
    console.log("Se ha conectado un usuario!!!");

    socket.on("message", (message) => {
        console.log("Se ha recibido el mensaje:", message);
        io.emit("message", message);
    });

    socket.on("disconnect", () => {
        console.log("Se ha desconectado un usuario...");
    });
});



server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

