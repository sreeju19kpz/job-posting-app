import { View, Text, ScrollView } from "react-native";
import React, { useCallback } from "react";
import DiscoverItem from "../Elements/DiscoverItem";
import { styles } from "../../StyleSheet";
import { useEffect, useState } from "react";
import { useDiscoverCommunitiesMutation } from "../Features/community/communityApiSlice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default Discover = () => {
  const [discoverCommunities, { isLoading }] = useDiscoverCommunitiesMutation();
  const [data, setData] = useState(); //discover new communities
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      const getAllC = async () => {
        const data = await discoverCommunities().unwrap();
        data && setData(data);
      };
      getAllC();
    }, [navigation])
  );
  if (isLoading && data)
    return (
      <View style={[styles.flex1, styles.bakColWhi]}>
        <View
          style={[styles.gap20, styles.wid100p, styles.hei100p, styles.pad10]}
        >
          {data.map((item, index) => {
            return <DiscoverItem item={item} key={index} />;
          })}
        </View>
      </View>
    );
  if (isLoading && data === undefined)
    return <View style={[styles.flex1, styles.bakColWhi]}></View>;
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
