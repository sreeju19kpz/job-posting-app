import { View, Text } from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
import { setCredentials, logout } from "../../Features/auth/authSlice";

export const saveTokenToSecureStore = (store) => (next) => (action) => {
  if (action.type === setCredentials.type) {
    const { token } = action.payload;
    SecureStore.setItemAsync("jwtToken", token).catch((error) => {
      console.error("Error saving token to secure store:", error);
    });
  } else if (action.type === logout.type) {
    SecureStore.deleteItemAsync("jwtToken").catch((error) => {
      console.error("Error clearing token from secure store:", error);
    });
  }
  return next(action);
};

export const loadTokenFromSecureStore = async (dispatch) => {
  try {
    const token = await SecureStore.getItemAsync("jwtToken");
    if (token) {
      dispatch(setCredentials({ token }));
    } else dispatch(logout());
  } catch (error) {
    console.error("Error loading token from secure store:", error);
  }
};
