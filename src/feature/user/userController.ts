import { Request, Response, NextFunction } from "express"


export const createUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // database call

    } catch (error) {
        console.error("Error in createUser: ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}