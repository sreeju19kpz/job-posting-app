import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Authentication from "./components/pages/Authentication";
import JobApp from "./components/pages/JobApp";
import { selectCurrentState } from "./components/Features/auth/authSlice";
import { Text, View } from "react-native";

export default Main = () => {
  const isLoggedIn = useSelector(selectCurrentState);
  console.log(isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn === undefined ? (
        <UndefinedScreen />
      ) : isLoggedIn ? (
        <JobApp />
      ) : (
        <Authentication />
      )}
    </NavigationContainer>
  );
};
export const UndefinedScreen = () => {
  return (
    <View>
      <Text>loading</Text>
    </View>
  );
};
