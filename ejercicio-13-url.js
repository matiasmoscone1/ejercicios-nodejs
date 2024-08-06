/* Ejercicio 4: Modifica una URL dada para cambiar su path y agregar un nuevo parámetro 
de consulta. Por ejemplo, cambia el path de http://example.com/oldpath a /newpath 
y agrega el parámetro foo=bar. */

const rl = require("node:readline");
const my_url = new URL("http://example.com/oldpath");

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});


interface.question("Agrega la propiedad: ", (key) => {
    interface.question("Agrega el valor: ", (value) => {
        my_url.searchParams.append(key, value);
    });
});

my_url.pathname = "/newpath";
//my_url.searchParams.append("foo", "bar");

//console.log(my_url);


