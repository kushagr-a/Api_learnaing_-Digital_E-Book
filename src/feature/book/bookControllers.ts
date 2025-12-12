import { Request, Response, NextFunction } from "express";
import cloudinary from "../../utils/cloudinary/cloudinary";

export const createBook = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        // const { title, author, genre } = req.body;

        // const files = req.file as {
        //     [fieldname: string]: Express.Multer.File[];
        // }
        // const coverImageMimeType = files.coverImage[0];

        // const uploadResult = await cloudinary.uploader.upload(filePath, {
        //     filename_override: fileName,
        //     folder: 'book-covers',
        //     format: coverImageMimeType

        // })
    } catch (error) {
        console.error("Error in createBook: ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};
