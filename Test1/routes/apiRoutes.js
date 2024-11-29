const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/readUser", userController.read);
router.post("/createUser", userController.create);
router.delete("/deleteUser", userController.delete);


module.exports = router;