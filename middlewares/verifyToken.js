import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isEmail, isMobile } from "../helpers/helpers.js";

// verify token
const tokenVerify = (req, res, next) => {
  // const authHeader = req.headers.authorization || req.headers.Authorization;
  const accessTOken = req.cookies.accessToken;

  if (!accessTOken) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  jwt.verify(
    accessTOken,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (error, decode) => {
      if (error) {
        return res.status(400).json({ message: "Invalid verify Token" });
      }

      // get login user data

      let me = null;
      if (isEmail(decode.auth)) {
        me = await User.findOne({ email: decode.email }).select(
          "-password accessToken"
        );
      } else if (isMobile(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-password");
      }
    })
  );
  req.me = me;
  next();
};

export default tokenVerify;
