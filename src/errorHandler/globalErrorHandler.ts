import { HttpError } from "http-errors";
import { config } from "../config/config"
import { Request, Response, NextFunction } from "express";


// global error handler
export const globalErrorHandler = (
    err: HttpError,
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        message: err.message,
        errorStack: config.NODE_ENV === "development" ? err.stack : undefined
    });
};
