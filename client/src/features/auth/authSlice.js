import { createSlice } from "@reduxjs/toolkit";
import {
  getLoginUser,
  loginUser,
  logoutUser,
  registerDonor,
  registerPatient,
} from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("loginUser")
      ? JSON.parse(localStorage.getItem("loginUser"))
      : null,
    message: null,
    error: null,
    loader: false,
  },

  reducers: {
    setMessageEmpty: (state, action) => {
      state.error = null;
      state.message = null;
      state.auth = action.payload.auth;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerPatient.pending, (state) => {
        state.loader = true;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      //  reister doner
      .addCase(registerDonor.pending, (state) => {
        state.loader = true;
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loader = false;
        state.message = action.error.message;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
      })
      // log in user
      .addCase(loginUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loader = false;
        state.message = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("loginUser", JSON.stringify(action.payload.user));
      })

      // logout system
      .addCase(logoutUser.pending, (statue) => {
        statue.loader = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loader = false;
        state.message = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("loginUser");
      })

      // check user log in or not
      .addCase(getLoginUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.loader = false;
        action.message = action.error.message;
        state.user = null;
        localStorage.removeItem("loginUser");
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
        state.user = action.payload.auth;
        localStorage.setItem("loginUser", JSON.stringify(action.payload.auth));
      });
  },
});

// selectors
export const authSelectorsSlice = (state) => state.auth;

// export action
export const { setMessageEmpty } = authSlice.actions;

// reducer
export default authSlice.reducer;
