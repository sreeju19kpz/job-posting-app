import { View, Text, Image, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../../StyleSheet";
import { useGetuserBannerMutation } from "../Features/user/userApiSlice";
import dp from "../../assets/dp.jpg";
import cover from "../../assets/coverImg.jpg";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

import AppliedJobs from "./AppliedJobs";
import AppliedInternships from "./AppliedInternships";
import AllPostsFromUser from "./AllPostsFromUser";
const Profile = () => {
  const [getUserBanner, { isLoading }] = useGetuserBannerMutation();
  const [data, setData] = useState(); // community posts
  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    const getAllC = async () => {
      const data = await getUserBanner().unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );

  return (
    <>
      <View style={[styles.wid100p, styles.bakColWhi]}>
        <View style={[styles.wid100p]}>
          <View style={[styles.wid100p, styles.hei150]}>
            <Image
              style={[styles.wid100p, styles.hei150]}
              source={data?.coverImg ? { uri: data?.coverImg } : cover}
            />
            <Image
              style={[
                styles.wid70,
                styles.hei70,
                styles.posAbs,
                { top: 112.5, left: 20, borderRadius: 35 },
              ]}
              source={data?.dp ? { uri: data?.dp } : dp}
            />
          </View>
          <View
            style={[
              styles.hei70,
              styles.wid100p,
              styles.flexDirRow,
              styles.jusConSpcAro,
              styles.aliIteFleEnd,
              styles.padHor20,
              styles.borBotWid1,
              styles.borColBlaLigP1,
              styles.padVer1,
            ]}
          >
            <Text style={[styles.wid100p, styles.fonSiz22, styles.fonWei700]}>
              {data?.name}
            </Text>
          </View>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          swipeEnabled: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Your Jobs") {
              iconName = focused ? "ios-briefcase" : "ios-briefcase-outline";
            } else if (route.name === "Your Internships") {
              iconName = focused ? "paper-plane" : "paper-plane-outline";
            }
            return <Ionicons name={iconName} size={16} color={color} />;
          },

          tabBarActiveTintColor: "#1F51FF",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="Home" component={AllPostsFromUser} />
        <Tab.Screen name="Your Jobs" component={AppliedJobs} />
        <Tab.Screen name="Your Internships" component={AppliedInternships} />
      </Tab.Navigator>
    </>
  );
};

export default Profile;
