import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feed from "./Feed";
import Discover from "./Discover";
const Tab = createMaterialTopTabNavigator();
const YourFeed = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="discover " component={Discover} />
    </Tab.Navigator>
  );
};

export default YourFeed;
