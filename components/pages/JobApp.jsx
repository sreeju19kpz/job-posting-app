import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import JobsHome from "../jobs/JobsHome";
import InternshipsHome from "../internships/InternshipsHome";
import CommunityHome from "../community/CommunityHome";
import ProfileHome from "../profile/ProfileHome";
import { styles } from "../../StyleSheet";
const Tab = createBottomTabNavigator();
export default function JobApp() {
  return (
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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-circles-communities"
              size={24}
              color={color}
            />
          ),
          headerRight: () => (
            <Pressable style={[styles.padHor4]}>
              <EvilIcons name="search" size={26} color="#ffffff" />
            </Pressable>
          ),
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTintColor: "#ffffff",
        }}
      />
    </Tab.Navigator>
  );
}
