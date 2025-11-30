import express, { Request, Response } from "express";
import ApiRouter from "./apiRoutes";
import { globalErrorHandler } from "./errorHandler/globalErrorHandler";

const app = express();

// middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))

app.use("/api", ApiRouter);

// Health Check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Health Check"
  })
})

// global error handler
app.use(globalErrorHandler)

export default app;