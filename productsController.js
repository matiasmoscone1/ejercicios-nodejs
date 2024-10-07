const productsController = {};

productsController.index = (req, res) => {
    res.status(200).send("Bienvenido a la pagina productos");
};

productsController.view = (req, res) => {
    res.status(200).send("TODOS LOS PRODUCTOS");
};

productsController.category = (req, res) => {
    res.status(200).send("Selecciona una categoria de productos!");
};


module.exports = productsController;


