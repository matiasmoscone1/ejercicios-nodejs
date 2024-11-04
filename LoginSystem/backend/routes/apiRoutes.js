const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");


router.post("/auth/login", loginController.auth);
router.post("/logout", loginController.logout);

router.get("/adminRead", adminController.read);

router.post("/basicUpdate", userController.basicUpdate);
router.get("/users",)


module.exports = router;