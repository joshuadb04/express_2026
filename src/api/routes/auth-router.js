import express from "express";
import { getMe, postLogin } from "../controllers/auth-controller.js";
import { authenticateToken } from "../../middlewares/authentication.js";
import { postUser } from "../controllers/user-controller.js";
import { validateLogin } from "../../middlewares/validation.js";

const authRouter = express.Router();

authRouter.route("/login").post(validateLogin, postLogin);
authRouter.route("/me").get(authenticateToken, getMe);
authRouter.route("/logout").get((req, res) => {
  res.json({ message: "Logged out" });
});
authRouter.route("/register").post(postUser);

export default authRouter;
