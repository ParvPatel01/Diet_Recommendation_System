const {  Router } = require("express");
const UserController = require('../controllers/user-controller.js');
const { authMiddleWare } = require("../middleware/auth_middleware.js");


const router = Router()

router.post("/login",UserController.login);

router.post("/register",UserController.register);

router.put("/updateProfile",authMiddleWare,UserController.updateProfile)

module.exports = router;