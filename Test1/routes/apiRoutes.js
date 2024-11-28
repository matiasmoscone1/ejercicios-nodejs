const express = require("express");
const router = express.Router();


router.get("/readUsers", userController.read);



module.exports = router;