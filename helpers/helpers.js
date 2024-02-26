import User from "../models/User.js";

//   FIND PUBLICK ID
export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};

/**
 *  is email
 */
export const isEmail = (email) => {
  return /^[^\.-][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 *   is mobile
 */
export const isMobile = (mobile) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 *  email validation
 */
export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};

/**
 *  is number
 */
export const isNumber = (number) => {
  return /^[0-9\+]{1, }$/.test(number);
};

/**
 *  create OTP
 */
export const createOTP = (length = 5) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

/**
 *  dotes to hypens
 */
export const tokenEncode = (inputString) => {
  // user send string method with a regular expression to replace dots to hyphens
  const doteTOHypens = inputString.replace(/\./g, "dwipu91");
  return doteTOHypens;
};

/**
 *  hypens to doted
 */
export const tokenDecode = (inputString) => {
  // user send string method with a regular expression to replace hypen to dote
  const hypensTOdoted = inputString.replace(/dwipu91/g, ".");
  return hypensTOdoted;
};
