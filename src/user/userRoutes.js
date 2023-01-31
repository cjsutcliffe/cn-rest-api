const {Router} = require("express");
const {createUser, listUsers, login, updateEmail, deleteUser} = require("./userControllers");
const {hashPass, comparePass, tokenCheck} = require("../middleware");

const userRouter = Router();

userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, login);
//update email
userRouter.put("/updateUser", tokenCheck, updateEmail);
//delete account
userRouter.delete("/deleteUser", comparePass, deleteUser);
userRouter.get("/authCheck", tokenCheck, login);

module.exports = userRouter;