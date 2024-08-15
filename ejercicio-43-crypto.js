/* Encriptación y desencriptación con claves derivadas: Utiliza la clave derivada en el 
enunciado anterior para encriptar y luego desencriptar un archivo de texto. */

const crypto = require("node:crypto");

const password = "hola123";

const devKey = () => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, "salt", 100000, 32, "sha512", (err, derivedKey) => {
            if(err){
                throw reject;
            }else{
                resolve(derivedKey.toString("hex"));
                //console.log(derivedKey.toString("hex"));
            }
        });   
    });
}


devKey().then((key) => {
    const secretKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
    let decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);

    let encrypted = cipher.update(key, "utf-8", "hex");
    encrypted += cipher.final("hex");    

    let decrypt = decipher.update(encrypted, "hex", "utf-8");
    decrypt += decipher.final("utf-8"); 
    console.log(key);
    console.log(encrypted);
    console.log(decrypt);
});


