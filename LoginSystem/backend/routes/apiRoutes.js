const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const verificationMiddleware = require("../middlewares/verificationMiddleware");

router.post("/auth/login", loginController.auth);
router.post("/logout", loginController.logout);

router.get("/adminRead",  adminMiddleware, adminController.read);
router.delete("/adminDelete/:id", adminMiddleware, adminController.delete);

router.post("/createUser", verificationMiddleware, userController.createUser);
router.post("/basicUpdate", userController.basicUpdate);


module.exports = router;