import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import Job from "./Job";
import { useGetAllJobsMutation } from "../Features/jobs/jobsApiSlice";
import { useEffect, useState } from "react";
import JISkeleton from "../Elements/JISkeleton";

export default AllJobs = () => {
  const [data, setData] = useState();
  const [getAllJobs, { isLoading }] = useGetAllJobsMutation();
  useEffect(() => {
    const getJobs = async () => {
      const data = await getAllJobs().unwrap();
      data && setData(data);
    };
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 3 }).map((_, i) => {
          return <JISkeleton key={i} />;
        })}
      </>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 60 }}
      style={[
        styles.wid100p,
        styles.flex1,
        styles.bakColWhi,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={[styles.flex1, styles.bakColWhi]}>
        {data?.map((item, index) => {
          return <Job item={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};
