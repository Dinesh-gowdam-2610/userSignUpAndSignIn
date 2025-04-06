const signUpController = require("../Controllers/signUpController");
const gameListController = require("../Controllers/gameListController");
const router = require("express").Router();

//default api token

router.get("/token", signUpController.getDefaultToken);

//SIGNUP
router.post("/signUp", signUpController.signUpUser);

//LOGIN
router.post("/login", signUpController.loginUser);
// GET ALL USERS
router.get("/getAllUsers", signUpController.getAllUsers);
//GET USER DETAILS
router.post("/getUser", signUpController.getUserByEmailOrPhn);

//UPDATE USER
router.put("/updateUser", signUpController.updateUser);
//GET TOKEN
router.get("/getUserToken", signUpController.getToken);
//DELETE USER
router.delete("/deleteUser", signUpController.deleteUserByEmailOrPhn);
//FOTGET PASSWORD
router.post("/forgot-password", signUpController.userForgetPassword);
//RESET PASSWORD
router.post("/password-reset/:userId/:token", signUpController.passwordReset);

//GET LIST OF GAMES
router.get("/list/:limit", gameListController.getGameList);

//ADD GAME LIST TO CART
router.post("/add/user", gameListController.addCartGame);

//DELETE GAME LIST FROM CART
router.delete("/delete/user", gameListController.deleteCartGame);

module.exports = router;
