import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import Job from "./Job";

import useFetchData from "../api/FetchData";

export default AllJobs = () => {
  const { loading, faliled, data } = useFetchData({ url: "jobs/all" });
  if (loading) return <View></View>;
  if (faliled) return <View></View>;
  return (
    <ScrollView
      style={[
        styles.bac3,
        styles.wid100p,
        styles.padLef20,
        styles.padRig20,
        styles.padBot20,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={[styles.wid100p, styles.gap20]}>
        {data &&
          data.allJobs.map((item, index) => {
            return <Job item={item} key={item._id} />;
          })}
      </View>
    </ScrollView>
  );
};
