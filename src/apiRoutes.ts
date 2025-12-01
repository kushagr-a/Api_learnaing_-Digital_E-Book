import { Router } from "express";
import userRouter from "./feature/user/userRouter";
import bookRouter from "./feature/book/bookRoutes";
const ApiRouter = Router();

ApiRouter.use("/users", userRouter);
ApiRouter.use("/books", bookRouter);

export default ApiRouter;
