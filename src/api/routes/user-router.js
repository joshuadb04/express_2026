import express from "express";
import { getUser, getUserById, postUser, putUser, deleteUser } from "../controllers/user-controller.js";
import { authenticateToken } from "../../middlewares/authentication.js";
import { validateUser } from "../../middlewares/validation.js";

const userRouter = express.Router();

userRouter.route("/").get(getUser).post(validateUser, postUser);

userRouter.route("/:id").get(getUserById).put(authenticateToken, putUser).delete(authenticateToken, deleteUser);

export default userRouter;
