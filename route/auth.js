import express from "express";
import {
  accoutActivatioByOtp,
  getLogInUser,
  login,
  logout,
  registerUser,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";

const router = express.Router();

// create route
router.post("/register", registerUser);
router.post("/login", login);
router.post("/account-activate-by-otp/:token", accoutActivatioByOtp);

router.get("/me", tokenVerify, getLogInUser);
router.post("/logout", tokenVerify, logout);

// export default router
export default router;
