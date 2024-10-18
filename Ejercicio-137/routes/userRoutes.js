const userController = require("../controllers/userController.js");
const {validatorInput, validator } = require("../middlewares/validatorInput");
const loginController = require("../controllers/userLoginController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const express = require("express");

const router = express.Router();

router.get("/login", loginController.login);
router.post("/login", loginController.validLogin);

router.get("/read", adminMiddleware, authMiddleware, userController.read);

router.get("/form", adminMiddleware, authMiddleware, userController.form);

router.post("/create", adminMiddleware, authMiddleware, validatorInput, validator, userController.create);

router.delete("/delete/:id", adminMiddleware, authMiddleware, userController.delete);

router.get("/delete/:id", adminMiddleware, authMiddleware, userController.delete);

router.post("/update/:id", adminMiddleware, authMiddleware, validatorInput, validator, userController.update);

router.get("/update/:id", adminMiddleware, authMiddleware, userController.formUpdate);



module.exports = router;

