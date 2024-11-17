const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const verificationMiddleware = require("../middlewares/verificationMiddleware");
const verificationMiddlewareUpdate = require("../middlewares/verificationMiddlewareUpdate");


router.post("/auth/login", loginController.auth);
router.post("/logout", loginController.logout);

router.get("/adminRead",  adminMiddleware, adminController.read);
router.delete("/adminDelete/:id", adminMiddleware, adminController.delete);
router.post("/adminCreate",  adminMiddleware, verificationMiddleware, adminController.create);
router.post("/adminUpdate/:id", adminMiddleware, verificationMiddlewareUpdate, adminController.update);

router.post("/createUser", verificationMiddleware, userController.createUser);
router.post("/basicUpdate", userController.basicUpdate);
router.post("/createPost", userController.createPost);
router.get("/readPost", userController.readPost);
router.delete("/deletePost/:id", userController.deletePost);


module.exports = router;