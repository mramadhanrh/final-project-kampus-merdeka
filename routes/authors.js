import { Router } from "express";
import { postCreateAuthor } from "../controllers/authors.js";

const authorsRouter = Router();

authorsRouter.post("/", postCreateAuthor);

export default authorsRouter;
