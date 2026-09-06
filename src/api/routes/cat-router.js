import express from "express";
import multer from "multer";
import { createThumbnail } from "../../middlewares/upload.js";
import { getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId } from "../controllers/cat-controller.js";
import { authenticateToken } from "../../middlewares/authentication.js";

const upload = multer({ dest: "uploads/" });
const catRouter = express.Router();

catRouter.route("/").get(getCat).post(upload.single("cat"), createThumbnail, postCat);
catRouter.route("/:id").get(getCatById).put(authenticateToken, putCat).delete(authenticateToken, deleteCat);
catRouter.route("/user/:id").get(getCatsByUserId);

export default catRouter;
