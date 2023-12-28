import { ScrollView, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import CommunityPicker from "../Elements/CommunityPicker";

import AllCommunityPosts from "./AllCommunityPosts";
import { useEffect, useState } from "react";
import { useGetAllJoinedCommunitiesMutation } from "../Features/community/communityApiSlice";
import AllPostsForUser from "./AllPostsForUser";
import CreatePost from "../Posts/CreatePost";

export default YourFeed = () => {
  const [getAllJoinedCommunities, { isLoading }] =
    useGetAllJoinedCommunitiesMutation();
  const [cP, setCp] = useState(); //community picker
  useEffect(() => {
    const getAllC = async () => {
      const data = await getAllJoinedCommunities().unwrap();
      data && setCp(data);
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
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={[styles.wid100p, styles.flex1, { backgroundColor: "white" }]}
    >
      <View style={[styles.wid100p, styles.pad10]}>
        <CreatePost type={"USER_POST"} />
      </View>
      <View style={[styles.pad20, styles.gap20, styles.flexDirRow]}>
        {cP?.map((item, index) => {
          return <CommunityPicker key={index} item={item} />;
        })}
      </View>
      <View>
        <AllPostsForUser />
      </View>
    </ScrollView>
  );
};
