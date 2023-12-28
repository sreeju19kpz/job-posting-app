import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import Internship from "./Internship";
import { useGetAllInternshipsMutation } from "../Features/internships/internshipApiSlice";
import { useEffect, useState } from "react";
import JISkeleton from "../Elements/JISkeleton";

export default AllInternships = () => {
  const [getAllInternships, { isLoading }] = useGetAllInternshipsMutation();
  const [data, setData] = useState();
  useEffect(() => {
    const getJobs = async () => {
      const data = await getAllInternships().unwrap();
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
          return <Internship data={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};
