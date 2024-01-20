const signUpController = require("../Controllers/signUpController");
const router = require("express").Router();
router.post("/signUp", signUpController.signUpUser);
router.post("/login", signUpController.loginUser);
router.post("/getUser", signUpController.getUserByEmailOrPhn);
router.get("/getUserToken", signUpController.getToken);
router.delete("/deleteUser", signUpController.deleteUserByEmailOrPhn);

module.exports = router;
