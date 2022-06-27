const express = require('express');
const router = express.Router();
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware");
const UserController = require("../Controllers/UserController")

//user api

router.get("/", UserController.hello)
router.post("/createUser", UserController.createUser)
router.post("/loginUser", UserController.loginUser)



module.exports = router;
