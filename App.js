import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./StyleSheet";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import AllJobs from "./components/jobs/AllJobs";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
          component={AllJobs}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="suitcase" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="internships"
          component={AllJobs}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="paper-plane" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="community"
          component={AllJobs}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="google-circles-communities"
                size={24}
                color={color}
              />
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
    </NavigationContainer>
  );
}

{
  /* <View style={[styles.flex1, styles.posRel]}>
<AllJobs />

<StatusBar style="auto" />
</View> */
}
