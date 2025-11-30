import { Router } from "express";
import userRouter from "./feature/user/userRouter";

const ApiRouter = Router();

ApiRouter.use("/users", userRouter);

export default ApiRouter;
