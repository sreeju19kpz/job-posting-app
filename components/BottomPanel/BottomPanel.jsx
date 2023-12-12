import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../../StyleSheet";

export default BottomPanel = () => {
  return (
    <View
      style={[
        styles.bot0,
        styles.lef0,
        styles.flexDirRow,
        styles.hei50px,
        styles.posAbs,
        styles.bac2,
        styles.wid100p,
      ]}
    >
      <View style={[styles.fleGro1]}>
        <Text>Jobs</Text>
      </View>
      <View style={[styles.fleGro1]}>
        <Text>Internships</Text>
      </View>
      <View style={[styles.fleGro1]}>
        <Text>community</Text>
      </View>
      <View style={[styles.fleGro1]}>
        <Text>profile</Text>
      </View>
    </View>
  );
};
