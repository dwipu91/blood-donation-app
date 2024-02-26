import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
  createOTP,
  isEmail,
  isMobile,
  tokenDecode,
} from "../helpers/helpers.js";
import { sendSMS } from "../utils/sendSMS.js";
import { AccountActivationEmail } from "../mails/AccountActivationEmail.js";

// new code start ===>
/**
 *  @descripation User Register
 * @mathod POST
 * @route /api/v1/auth/register
 * @access public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, auth, password } = req.body;

  //validation
  if (!name || !auth || !password) {
    return res.status(400).json({ message: "all fildes are required" });
  }

  // create OTP
  const otp = createOTP(6);

  // check user email or mobile
  let authEmail = null;
  let authMobile = null;

  if (isEmail(auth)) {
    authEmail = auth;
    const chackEamil = await User.findOne({ email: auth });
    if (chackEamil) {
      return res.status(400).json({ message: "Email aulrady existed" });
    }
  } else if (isMobile(auth)) {
    authMobile = auth;

    const checkMobile = await User.findOne({ mobile: auth });
    if (checkMobile) {
      return res.status(400).json({ message: "phone aulrady existed" });
    }
  } else {
    res.status(400).json({ message: "Email & mobile number no match" });
  }

  // password hash
  const hasePassword = await bcrypt.hash(password, 9);

  // register user
  const user = await User.create({
    name: name,
    email: authEmail,
    mobile: authMobile,
    password: hasePassword,
    accessToken: otp,
  });

  if (user) {
    // send otp to cookic
    const activationToken = jwt.sign(
      { auth },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5min",
      }
    );
    res.cookie("activationToken", activationToken);
    if (authEmail) {
      // send otp
      await AccountActivationEmail(auth, { code: otp, link: "" });
    } else if (authMobile) {
      // send otp
      await sendSMS(
        auth,
        `Hello #${name}, Your account actiovation otp is ${otp}`
      );
    }
  }

  // response
  res.status(201).json({ user: user, message: "create user done" });
});

/**
 *
 *  @descripation user account actiovation
 * @mathod POST
 * @route /api/v1/auth/account-activate-by-otp/:token
 * @access public
 */

export const accoutActivatioByOtp = asyncHandler(async (req, res) => {
  // get otken
  const { token } = req.params;
  const { otp } = req.body;

  // token decose
  const activationToken = tokenDecode(token);

  //token verify
  const tokenVaerify = jwt.verify(
    activationToken,
    process.env.ACCESS_TOKEN_SECRET
  );

  if (!tokenVaerify) {
    return res.status(400).json({ message: "Invalide token" });
  }
  // activate user
  let activatieUser = null;
  if (isEmail(tokenVaerify.auth)) {
    activatieUser = await User.findOne({ email: tokenVaerify.auth });
    if (!activatieUser) {
      return res.status(404).json({ message: "Email not found" });
    }
  } else if (isMobile(tokenVaerify.auth)) {
    activatieUser = await User.findOne({ mobile: tokenVaerify.auth });
    if (!activatieUser) {
      return res.status(404).json({ message: "Mobile not found" });
    }
  } else {
    return res.status(400).json({ message: "Invalid user account" });
  }

  // check otp
  if (otp !== activatieUser.accessToken) {
    return res.status(400).json({ message: "OTP not found" });
  }

  // update activate user data
  activatieUser.isActivate = true;
  activatieUser.accessToken = null;
  activatieUser.save();

  // clear cookie
  res.clearCookie("activationToken");

  // responst otp code
  res
    .status(200)
    .json({ user: activatieUser, message: "user activation successfull" });
});

/**
 *
 *
 *@descripation user log in
 * @mathod POST
 * @route /api/v1/auth/login
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { auth, password } = req.body;

  // validation
  if (!auth || !password) {
    return res.status(400).json({ message: "All fild are required" });
  }

  // check user auth
  let loginUser = null;
  if (isEmail(auth)) {
    loginUser = await User.findOne({ email: auth });

    // check user email exait or not ==>
    if (!loginUser) {
      return res.status(400).json({ message: "Email user not Found" });
    }
  } else if (isMobile(auth)) {
    loginUser = await User.findOne({ mobile: auth });

    // check user mobile exait or not==>
    if (!loginUser) {
      return res.status(400).json({ message: "Mobile user not Found" });
    }
  } else {
    res.status(400).json({ message: "user no email and phone number" });
  }

  // check password
  const passwordCheck = bcrypt.compareSync(password, loginUser.password);
  if (!passwordCheck) {
    return res.status(400).json({ message: "Password not Match" });
  }

  // create login user token
  const accessToken = jwt.sign(
    { auth: auth },
    process.env.ACCOUNT_ACTIVATION_SECRET,
    { expiresIn: "365d" }
  );

  // set token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  // response
  res.status(200).json({ user: loginUser, message: "User login successfull" });
});

/**
 *
 *@descripation get login user data
 * @mathod get
 * @route /api/v1/auth/me
 * @access private
 */
export const getLogInUser = asyncHandler(async (req, res) => {
  if (!req.me) {
    return res.status(404).json({ message: "Log in user data not found" });
  }

  res.status(200).json({ auth: req.me, message: "log in" });
});

/**
 *
 *
 *@descripation user log out
 * @mathod post
 * @route /api/v1/auth/logout
 * @access private
 */

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successful" });
});
