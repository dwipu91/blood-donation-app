import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      default: null,
      trim: true,
    },
    auth: {
      type: String,
      default: null,
      trim: true,
    },
    role: {
      type: String,
      default: "patient",
      enum: ["patient", "doner", "admin"],
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "undefined"],
      default: "undefined",
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    accessToken: {
      type: String,
      default: null,
      trim: true,
    },
    isActivate: {
      type: String,
      default: false,
    },
    propession: {
      type: String,
      default: null,
      trim: true,
    },
    bloodGroup: {
      type: String,
      default: null,
      trim: true,
    },
    bio: {
      type: String,
      default: null,
      trim: true,
    },
    lastDonation: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
