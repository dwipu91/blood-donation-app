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
  extraReducers: () => {},
});

// export
export default authSlice.reducer;
