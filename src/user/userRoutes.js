const {Router} = require("express");
const {createUser, listUsers, compare} = require("./userControllers");
const {hashPass} = require("../middleware");

const userRouter = Router();

userRouter.get("/listUser", listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.get("/login", compare);

module.exports = userRouter;