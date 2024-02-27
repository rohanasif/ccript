import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    },
    refreshToken: (state, action) => {
      return {
        ...state,
        token: action.payload.newToken,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
      };
    },
  },
});

export const { signIn, refreshToken, setToken } = authSlice.actions;
export default authSlice.reducer;
