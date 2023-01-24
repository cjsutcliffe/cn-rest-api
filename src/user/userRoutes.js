const {Router} = require("express");
const {createUser, listUsers, comparePass} = require("./userControllers");
const {hashPass} = require("../middleware");

const userRouter = Router();

userRouter.get("/listUser", listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, loginUser);

module.exports = userRouter;