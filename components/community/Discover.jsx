import { View, Text, ScrollView } from "react-native";
import React from "react";
import useFetchData from "../api/FetchData";
import DiscoverItem from "../Elements/DiscoverItem";
import { styles } from "../../StyleSheet";

export default Discover = () => {
  const {
    loading,
    faliled,
    data: community,
  } = useFetchData({ url: `communities/newto/65747efc58fcbea05ee7d085` });

  return (
    <ScrollView style={[styles.flex1, styles.gap20, styles.bakColWhi]}>
      <View style={[styles.wid100p, styles.hei100p]}>
        {community && community.id.length > 0 ? (
          <View
            style={[styles.gap20, styles.wid100p, styles.hei100p, styles.pad10]}
          >
            {community.id.map((item, index) => {
              return <DiscoverItem id={item} key={index} />;
            })}
          </View>
        ) : (
          <View
            style={[
              styles.wid100p,
              styles.hei150,
              styles.jusConCnt,
              styles.aliIteCnt,
            ]}
          >
            <Text style={[styles.fonSiz18, styles.fonWei500]}>
              Nothing is here
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
