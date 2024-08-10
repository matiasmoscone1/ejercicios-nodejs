/* Convertir un objeto en una cadena de consulta: Dado un objeto con varias propiedades, 
usa querystring.stringify() para convertirlo en una cadena de consulta (query string). */

const querystring = require("node:querystring");

const data = {
    name: "John Doe",
    age: 30,
    city: "New York",
    interests: ["programming", "music", "traveling"],
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890"
    }
};

const checkObject = () => {
    const items = [];
    for(let i in data){
        if(typeof data[i] === "object" && !Array.isArray(data[i])){
            for(let j in data[i]){
                items.push(data[i][j]);
            }
        }else{
            items.push(data[i]);
        }
    }
    items.forEach((prop) => {
        for(let i in data){
            prop = i;
        }
    })
    return(querystring.stringify(items));
}

console.log(checkObject());







