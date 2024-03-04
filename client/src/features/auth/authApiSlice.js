import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// register patient
export const registerPatient = createAsyncThunk(
  "atuh/registerPatient",
  async (data) => {
    try {
      const respons = await axios.post(
        `http://localhost:5050/api/v1/auth/register`,
        data,
        { withCredentials: true }
      );

      return respons.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
