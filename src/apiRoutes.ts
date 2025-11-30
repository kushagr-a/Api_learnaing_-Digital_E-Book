import { Router } from "express";
import userRouter from "./feature/user/userRouter";

const ApiRouter = Router();

ApiRouter.use("/user", userRouter);

export default ApiRouter;
