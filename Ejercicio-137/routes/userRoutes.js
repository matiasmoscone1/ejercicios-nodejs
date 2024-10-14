const userController = require("../controllers/userController.js");

const express = require("express");

const router = express.Router();

router.get("/read", userController.read);

router.post("/create", userController.create);

router.delete("/delete", userController.delete);

router.post("/update", userController.update);



