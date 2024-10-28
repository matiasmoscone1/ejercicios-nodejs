const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/auth/login", loginController.auth);
router.post("/logout", loginController.logout);


module.exports = router;