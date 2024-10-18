const userController = require("../controllers/userController.js");
const {validatorInput, validator } = require("../middlewares/validatorInput");
const loginController = require("../controllers/userLoginController");

const express = require("express");

const router = express.Router();

router.get("/login", loginController.login);

router.get("/read", userController.read);

router.get("/form", userController.form);

router.post("/create", validatorInput, validator, userController.create);

router.delete("/delete/:id", userController.delete);

router.get("/delete/:id", userController.delete);

router.post("/update/:id", validatorInput, validator, userController.update);

router.get("/update/:id", userController.formUpdate);



module.exports = router;

