const dbProducts = require("./dbProducts");
const productsController = {};

productsController.index = (req, res) => {
    res.status(200).send("Bienvenido a la pagina productos");
};

productsController.v1 = (req, res) => {
    res.status(200).json(dbProducts);
};

productsController.v2 = (req, res) => {
    const html = `<table border={1}>
        <thead>
            <tr>
                <td>Nombre</td>
                <td>Categoria</td>
                <td>Precio</td>
                <td>Descripcion</td>
            </tr>
        </thead>
        <tbody>
            ${dbProducts.products.map((prod) => {
                return(`<tr>
                <td>${prod.nombre}</td>
                <td>${prod.categoria}</td>
                <td>${prod.precio}</td>
                <td>${prod.descripcion}</td>
                </tr>`);
            })}
        </tbody>
    </table>`
    res.status(200).send(html);
};

productsController.view = (req, res) => {
    res.status(200).send("TODOS LOS PRODUCTOS");
};

productsController.category = (req, res) => {
    res.status(200).send("Selecciona una categoria de productos!");
};


module.exports = productsController;


