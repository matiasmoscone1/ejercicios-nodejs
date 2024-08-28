/* Ejecutar un proceso en segundo plano: Usa child_process.exec o child_process.spawn 
para ejecutar un comando como sleep 10 y verifica que el proceso se ejecute en segundo plano. */

const child_process = require("node:child_process");

child_process.exec("ping google.com", (err, stdout, stderr) => {
    if(err){
        console.log("Error al ejecutar el comando: ", err);
    }
    if(stderr){
        console.log("Error al ejecutar el comando: ", stderr);
    }else{
        console.log("El resultado: ", stdout);
        console.log(`El proceso ping se ejecutó en el PID: ${process.pid}`);
    }

});



