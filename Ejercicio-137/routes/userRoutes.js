const userController = require("../controllers/userController.js");
const validatorInput = require("../middlewares/validatorInput");

const express = require("express");

const router = express.Router();


router.get("/read", userController.read);

router.get("/form", userController.form);

router.post("/create", validatorInput, userController.create);

router.delete("/delete/:id", userController.delete);

router.get("/delete/:id", userController.delete);

router.post("/update/:id", validatorInput, userController.update);

router.get("/update/:id", userController.formUpdate);



module.exports = router;

