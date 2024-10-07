const usersController = {};


usersController.index = (req, res) => {
    res.status(200).send("Bienvenido a la pagina Users");
};



module.exports = usersController;

