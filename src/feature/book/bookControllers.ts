import { Request, Response, NextFunction } from "express";

export const createBook = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        const { title, author, genre, coverImage, file } = req.body;
    } catch (error) {
        console.error("Error in createBook: ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};