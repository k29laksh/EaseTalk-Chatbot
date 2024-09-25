import express from "express";
import {

  UserLogin,
  UserLogout,
  UserSignup,
 
} from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/signup").post(UserSignup);
router.route("/login").post(UserLogin);
router.route("/logout").post(authMiddleware, UserLogout);



export default router;
