
process.on("message", (message) => {
    console.log("Mensaje recibido del proceso padre: ", message);

    process.send(`Hola aca el proceso hijo recbiendo mensaje de proceso padre: ${message}`);
});


