import { config } from "../config/config";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Mongoose connection successful");
        })

        mongoose.connection.on("error", (err) => {
            console.log("Mongoose connection error", err);
        })

        await mongoose.connect(config.MONGO_URI as string);


    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // idhr apne server ko hi stop kregy
    }
}

export default connectDB;   