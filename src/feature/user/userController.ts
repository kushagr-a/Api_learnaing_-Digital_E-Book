import { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../user/userModel"
import { config } from "../../config/config"

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
        const existUser = await User.findOne({ email })

        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        // password hash
        const hashedPassword = await bcrypt.hash(password, 10)

        // database call
        const newUser = await User.create(
            {
                name,
                email,
                password: hashedPassword

            }
        )

        // Token generation or payload
        const token = jwt.sign(
            { sub: newUser._id },
            config.JWT_SECRET as string,
            {
                expiresIn: "1h"
            }
        )

        // password remove before sending response
        // const {password: _pass, ...userWithoutPassword } = newUser.toObject();
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: {
                user: newUser,
                accessToken: token
            }
        })

    } catch (error) {
        console.error("Error in createUser: ", error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}