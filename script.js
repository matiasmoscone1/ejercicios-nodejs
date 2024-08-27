const crypto = require("node:crypto");


const hash = crypto.createHash("sha256");


hash.update("hola muy buenos dias");

const hashResult = hash.digest("hex");

console.log(hashResult);




