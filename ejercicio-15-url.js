/* Ejercicio 6: Convierte una URL relativa a una URL absoluta utilizando una URL base 
proporcionada. Por ejemplo, convierte /path/to/resource en 
http://example.com/path/to/resource utilizando http://example.com como base. */

const url_base = "http://example.com";
const url_relative = "/path/to/resource"

const my_url = new URL(url_base+url_relative);

console.log(my_url.href);


