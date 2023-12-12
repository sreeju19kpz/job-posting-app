import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./StyleSheet";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import AllJobs from "./components/jobs/AllJobs";
export default function App() {
  return (
    <View style={[styles.flex1, styles.posRel]}>
      <AllJobs />
      <BottomPanel />
      <StatusBar style="auto" />
    </View>
  );
}
