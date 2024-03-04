import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

// selectors

// export action
export const {} = authSlice.actions;

// reducer
export default authSlice.reducer;
