import { Router } from "express";
import { multerMiddleware } from "../../middleware/multer"
import { createBook } from "../book/bookControllers"

const bookRouter = Router();

bookRouter.route("/createBook").post(multerMiddleware.fields(
    [
        {
            name: "coverImage",
            maxCount: 1
        },
        {
            name: "file",
            maxCount: 1
        }
    ]
), createBook);

// bookRouter.route("/getAllBooks").get();
// bookRouter.route("/getBookById/:id").get();
// bookRouter.route("/updateBook/:id").put();
// bookRouter.route("/deleteBook/:id").delete();

export default bookRouter;
