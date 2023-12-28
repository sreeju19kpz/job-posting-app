import { View, Text, ScrollView } from "react-native";
import React from "react";
import DiscoverItem from "../Elements/DiscoverItem";
import { styles } from "../../StyleSheet";
import { useEffect, useState } from "react";
import { useDiscoverCommunitiesMutation } from "../Features/community/communityApiSlice";

export default Discover = () => {
  const [discoverCommunities, { isLoading }] = useDiscoverCommunitiesMutation();
  const [data, setData] = useState(); //discover new communities
  useEffect(() => {
    const getAllC = async () => {
      const data = await discoverCommunities().unwrap();
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
    <ScrollView style={[styles.flex1, styles.gap20, styles.bakColWhi]}>
      <View style={[styles.wid100p, styles.hei100p]}>
        {data && data.length > 0 ? (
          <View
            style={[styles.gap20, styles.wid100p, styles.hei100p, styles.pad10]}
          >
            {data.map((item, index) => {
              return <DiscoverItem item={item} key={index} />;
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
