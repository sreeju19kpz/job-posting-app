import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../../../StyleSheet";

export default AllAppliedJobs = ({ internship }) => {
  return (
    <Pressable
      style={[
        styles.wid100p,
        styles.flexDirRow,
        styles.jusConSpcBtw,
        styles.aliIteCnt,
        styles.pad10,
        styles.borWid1,
        styles.borRad10,
        styles.borColBlaLigP1,
      ]}
    >
      <View>
        <Text style={[styles.fonSiz18, styles.fonWei500]}>
          {internship?.internship?.title}
        </Text>
        <Text style={[styles.fonColBlaLig1]}>
          {internship?.internship?.companyName}
        </Text>
      </View>
      <View style={styles.pad10}>
        <Pressable
          disabled={internship?.status === "Rejected"}
          style={[
            styles.padHor10,
            styles.padVer5,
            internship?.status === "Rejected"
              ? styles.bacColgreLig1
              : styles.bacColBlu,
          ]}
        >
          <Text style={[styles.fonColWhi]}>{internship?.status}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
