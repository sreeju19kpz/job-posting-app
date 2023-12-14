import React from "react";

import AllJobs from "./components/jobs/AllJobs";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StatusBar } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./StyleSheet";
import JobsHome from "./components/jobs/JobsHome";
import InternshipsHome from "./components/internships/InternshipsHome";
import CommunityHome from "./components/community/CommunityHome";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { paddingBottom: 4 },
          tabBarLabelStyle: { width: "100%" },
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="jobs"
          component={JobsHome}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="suitcase" size={20} color={color} />
            ),
            headerRight: () => (
              <Pressable style={[styles.padHor4]}>
                <EvilIcons name="search" size={26} color="blue" />
              </Pressable>
            ),
            headerTitleAlign: "left",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="internships"
          component={InternshipsHome}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="paper-plane" size={24} color={color} />
            ),
            headerRight: () => (
              <Pressable style={[styles.padHor4]}>
                <EvilIcons name="search" size={26} color="blue" />
              </Pressable>
            ),
            headerTitleAlign: "left",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="community"
          component={CommunityHome}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="google-circles-communities"
                size={24}
                color={color}
              />
            ),
            headerRight: () => (
              <Pressable style={[styles.padHor4]}>
                <EvilIcons name="search" size={26} color="blue" />
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={AllJobs}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor="#1F51FF"
      />
    </NavigationContainer>
  );
}

{
  /* <View style={[styles.flex1, styles.posRel]}>
<AllJobs />


</View> */
}
