import multer from "multer";
import path from "path";

const uploadPath = path.resolve(__dirname, "../../utils/uploads")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        // unique filename
        const ext = path.extname(file.originalname)
        const baseName = path.basename(file.originalname, ext)
        cb(null, `${baseName}-${Date.now()}${ext}`)
    }
})

export const multerMiddleware = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 10, // 10MB
    },
    fileFilter: (req, file, cb) => {
        // coverImage ke liye sirf images allow karo
        if (file.fieldname === "coverImage") {
            if (
                file.mimetype === "image/jpeg" ||
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpg"
            ) {
                cb(null, true);
            } else {
                cb(new Error("Cover image must be jpeg/png/jpg"));
            }
            return;
        }

        // file ke liye (book file) pdf/raw wagaira allow karo
        if (file.fieldname === "file") {
            if (
                file.mimetype === "application/pdf" ||
                file.mimetype === "application/epub+zip" ||
                file.mimetype.startsWith("application/")
            ) {
                cb(null, true);
            } else {
                cb(new Error("Book file must be a document (pdf/epub/etc)"));
            }
            return;
        }

        cb(new Error("Unexpected field"));
    },
});

// export const multerMiddleware = multer({
//     storage,
//     // temp file storage
//     dest: uploadPath,
//     limits: {
//         fileSize: 1024 * 1024 * 10
//     },
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//         }
//     }
// })