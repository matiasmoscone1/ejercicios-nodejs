/* util.deprecate: Implementa una función que simule el envío de un correo electrónico, 
pero márcala como obsoleta utilizando util.deprecate, indicando que debería usarse una 
nueva función en su lugar. */

const util = require("node:util");

const sendEmail = () => {
    console.log("Se ha enviado el mail correctamente!!!");
}

const sendEmailDeprecated = util.deprecate(sendEmail, "Esta funcion esta obsoleta, debe crearse una nueva...");

sendEmailDeprecated();

