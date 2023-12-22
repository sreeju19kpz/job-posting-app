import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import CommunityPicker from "../Elements/CommunityPicker";

import AllCommunityPosts from "./AllCommunityPosts";
import { useEffect } from "react";
import { useGetAllCommunitiesMutation } from "../Features/community/communityApiSlice";

export default YourFeed = () => {
  /*   const {
    loading: fajc, //fetching all joined communities
    faliled: fajcf, //fetching all joined communities failed
    data: communities,
  } = useFetchData({
    url: `users/65747efc58fcbea05ee7d085/communities`,
  });
 */
  const [getAllCommunities, { isLoading }] = useGetAllCommunitiesMutation();
  useEffect(() => {
    const getAllC = async () => {
      const userData = await getAllCommunities().unwrap();
    };
    getAllC();
  }, []);

  /*   if (fajc)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  if (fajcf)
    return (
      <View>
        <Text>faliled</Text>
      </View>
    ); */
  return (
    <ScrollView
      style={[styles.wid100p, styles.flex1, { backgroundColor: "white" }]}
    >
      {/*  <View style={[styles.pad20, styles.gap20, styles.flexDirRow]}>
        {communities &&
          communities.communities.map((item, index) => {
            return <CommunityPicker key={index} id={item} />;
          })}
      </View>
      <View>
        {communities &&
          communities.communities.map((item, index) => {
            return <AllCommunityPosts key={index} id={item} />;
          })}
      </View> */}
    </ScrollView>
  );
};
