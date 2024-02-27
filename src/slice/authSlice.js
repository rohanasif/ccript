import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        currentUser: action.payload,
      };
    },
    refreshToken: (state, action) => {
      return {
        currentUser: action.payload,
      };
    },
  },
});

export const { signIn, refreshToken } = authSlice.actions;
export default authSlice.reducer;
