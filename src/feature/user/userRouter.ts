import { Router } from "express";
import { createUser, loginUser } from "../user/userController"

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
// userRouter.post("/logout");

export default userRouter;
