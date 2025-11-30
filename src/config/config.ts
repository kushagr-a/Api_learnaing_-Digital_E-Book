import { config as conf} from "dotenv";

conf();

const _config = {
    port: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
}

// kisi bhi object ko freeze karna hai ya read only object banana hai
export const config = Object.freeze(_config);