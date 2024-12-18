const userController = require("../controllers/userController.js");
const {validatorInput, validatorUpdate, validator } = require("../middlewares/validatorInput");
const loginController = require("../controllers/userLoginController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const express = require("express");

const router = express.Router();

router.get("/login", loginController.login);
router.post("/login", loginController.validLogin);
router.post("/logout", authMiddleware, loginController.logout);



router.get("/profile", authMiddleware, userController.profile);
router.get("/settings", authMiddleware, userController.settings);

router.post("/settings/update/:id", authMiddleware, validatorUpdate, validator, userController.settingUpdate);


router.get("/read", authMiddleware, adminMiddleware, userController.read);

router.get("/form", authMiddleware, adminMiddleware, userController.form);

router.post("/create", authMiddleware, adminMiddleware, validatorInput, validator, userController.create);

router.delete("/delete/:id", authMiddleware, adminMiddleware, userController.delete);

router.get("/delete/:id", authMiddleware, adminMiddleware, userController.delete);

router.post("/update/:id", authMiddleware, adminMiddleware, validatorInput, validator, userController.update);

router.get("/update/:id", authMiddleware, adminMiddleware, userController.formUpdate);



module.exports = router;

