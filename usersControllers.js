const usersController = {};


usersController.index = (req, res) => {
    res.status(200).send("Bienvenido a la pagina Users");
};

usersController.list = (req, res) => {
    res.status(200).send("------------- Listado de usuarios -------------");
};

usersController.filter = (req, res) => {
    res.status(200).send("Filtrado de usuarios!!!");
};

module.exports = usersController;

