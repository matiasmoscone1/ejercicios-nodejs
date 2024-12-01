const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/multerConfig");

router.get("/readUser", userController.read);
router.post("/createUser", userController.create);
router.delete("/deleteUser/:id", userController.delete);
router.post("/updateUser/:id", userController.update);

router.post("/updatePhoto/:id", upload.single("photo"), userController.updatePhoto);

module.exports = router;