const {Router} = require("express");
const {createUser, listUsers} = require("./userControllers");

const userRouter = Router();

//userRouter.get("/listUser", listUsers);
userRouter.post("/addUser", createUser);

module.exports = userRouter;