import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Authentication from "./components/pages/Authentication";
import JobApp from "./components/pages/JobApp";
import { selectCurrentState } from "./components/Features/auth/authSlice";

export default Main = () => {
  const isLoggedIn = useSelector(selectCurrentState);


  return (
    <NavigationContainer>
      {isLoggedIn ? <JobApp /> : <Authentication />}
    </NavigationContainer>
  );
};
