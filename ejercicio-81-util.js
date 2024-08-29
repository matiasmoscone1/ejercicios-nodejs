/* util.inspect: Crea un objeto anidado con múltiples niveles de profundidad y utiliza 
util.inspect para imprimir una representación legible del objeto, ajustando las opciones 
de profundidad y colores. */

const util = require("node:util");

const objectAnided = {
    nombre: "Matías",
    edad: 28,
    direccion: {
        calle: "Av. Siempre Viva",
        ciudad: "Springfield",
        pais: "Argentina",
        colores: {
            primero: "celeste",
            segundo: "rojo",
            tercero: "azul",
            cuarto: "dorado"            
        }
    },
    contacto: {
        email: "matias@example.com",
        telefono: "123-456-7890"
    }
};

console.log(util.inspect(objectAnided, {showHidden: "false", depth: null, colors: true}));






