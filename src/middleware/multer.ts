import multer from "multer";
import path from "path";

export const multerMiddleware = multer({
    // temp file storage
    dest: path.resolve(__dirname, "../utils/uploads"),
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
})