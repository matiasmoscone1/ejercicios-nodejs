
const https = require("node:https");
const selfsigned = require("selfsigned");

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    hostname: "localhost",
    port: 443,
    path: "/",
    method: "GET",
    key: pems.private,
    cert: pems.cert,
    rejectUnauthorized: false
}

const request = https.request(options, (res) => {

    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("Respuesta del servidor:", data);
    });

    res.on("error", (err) => {
        console.log("Ha ocurrido un error:", err);
    });

});

request.on("error", (err) => {
    console.log("Ha ocurrido un error en la solicitud:", err);
});

request.end();


