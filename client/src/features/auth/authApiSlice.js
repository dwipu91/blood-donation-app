import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

// register patient
export const registerPatient = createAsyncThunk(
  "atuh/registerPatient",
  async (data) => {
    try {
      const respons = await API.post(`/api/v1/auth/register`, data, {});

      return respons.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// register Donor
export const registerDonor = createAsyncThunk(
  "auth/registerDonor",
  async (data) => {
    try {
      const respons = await API.post(`/api/v1/auth/register`, data, {});

      return respons.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const respons = await API.post(`api/v1/auth/login`, data);

    return respons.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

/**
 *      logout user
 */
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const respons = await API.post(`api/v1/auth/logout`, {});
    return respons.data;
  } catch (error) {
    throw new Error(error.respons.data.message);
  }
});

/**
 *  GET LOG IN USER DATA
 */
export const getLoginUser = createAsyncThunk("auth/getLoginUser", async () => {
  try {
    const respons = await API.get(`/api/v1/auth/me`, {});
    return respons.data;
  } catch (error) {
    throw new Error(error.respons.data.message);
  }
});
