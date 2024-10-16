const userController = require("../controllers/userController.js");

const express = require("express");

const router = express.Router();


router.get("/read", userController.read);

router.get("/form", userController.form);

router.post("/create", userController.create);

router.delete("/delete/:id", userController.delete);

router.get("/delete/:id", userController.delete);

router.post("/update", userController.update);

router.get("/update/:id", userController.formUpdate);



module.exports = router;

