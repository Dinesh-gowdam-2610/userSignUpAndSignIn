const signUpController = require("../Controllers/signUpController");
const router = require("express").Router();
//SIGNUP
router.post("/signUp", signUpController.signUpUser);

//LOGIN
router.post("/login", signUpController.loginUser);
//GET USER DETAILS
router.post("/getUser", signUpController.getUserByEmailOrPhn);
//GET TOKEN
router.get("/getUserToken", signUpController.getToken);
//DELETE USER
router.delete("/deleteUser", signUpController.deleteUserByEmailOrPhn);
//FOTGET PASSWORD
router.post("/forgot-password", signUpController.userForgetPassword);
//RESET PASSWORD
router.post("/password-reset/:userId/:token", signUpController.passwordReset);

module.exports = router;
