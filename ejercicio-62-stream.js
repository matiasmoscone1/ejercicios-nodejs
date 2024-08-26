/* Stream de datos personalizados: Crea un Readable stream personalizado que genere números 
del 1 al 1000 de forma secuencial y envíalos a un Writable stream que los escriba en un 
archivo de texto. */


const fs = require("node:fs");
const stream = require("node:stream");

const createNumberStream = (start, end) => {
    let current = start;

    return new stream.Readable({
        read(){
            if(current <= end){
                this.push(String(current) + "\n");
                current++;
            }else{
                this.push(null);
            }
        }
    });
}

const writeToFile = () => {
    
}






