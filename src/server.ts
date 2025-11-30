// import dotenv from "dotenv";
import app from "./index";
import { config } from "./config/config";
import connectDB from "./db/db";

// dotenv.config();

const startServer = async () => {
    const PORT = config.port || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    await connectDB()
}

startServer();