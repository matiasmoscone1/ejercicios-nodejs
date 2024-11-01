const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userController");

router.post("/auth/login", loginController.auth);
router.post("/logout", loginController.logout);

router.post("/basicUpdate", userController.basicUpdate);
router.get("/users",)

module.exports = router;