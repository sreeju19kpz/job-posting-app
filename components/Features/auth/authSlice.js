import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.token = token;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentState = (state) => state.auth.isLoggedIn;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentTokeen = (state) => state.auth.token;
