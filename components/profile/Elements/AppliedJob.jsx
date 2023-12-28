import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../../../StyleSheet";
import ApplyButton from "../../jobs/elements/ApplyButton";

export default AllAppliedJobs = ({ job }) => {
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
          {job?.job?.title}
        </Text>
        <Text style={[styles.fonColBlaLig1]}>{job?.job?.companyName}</Text>
      </View>
      <View style={styles.pad10}>
        <ApplyButton jobId={job?.job?._id} />
      </View>
    </Pressable>
  );
};
