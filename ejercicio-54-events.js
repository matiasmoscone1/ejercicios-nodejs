/* Herencia de EventEmitter: Crea una clase Reloj que extienda de EventEmitter. 
Esta clase debe emitir un evento tic cada segundo utilizando setInterval, y 
un evento finalizado después de 5 segundos. */

const events = require("node:events");


const myEmitter = new events.EventEmitter();


const ticEvent = () => {
    console.log("Evento tic activado!");
}

const ticEventFinally = () => {
    console.log("Evento tic finalizado...");
}

const reloj = () => {
    let count = 0;
    const intervalo = setInterval(() => {
        myEmitter.emit("tic");
        count += 1;
        if(count === 5){
            clearInterval(intervalo);
            myEmitter.emit("finTic");
        }
    }, 1000);
}

myEmitter.on("tic", ticEvent);
myEmitter.on("finTic", ticEventFinally);

reloj();
