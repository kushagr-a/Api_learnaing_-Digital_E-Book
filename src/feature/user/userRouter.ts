import { Router } from "express";
import { createUser } from "../user/userController"

const userRouter = Router();

userRouter.post("/register", createUser);
// userRouter.post("/login");
// userRouter.post("/logout");

export default userRouter;
