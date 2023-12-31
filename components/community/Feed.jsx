import { ScrollView, Text, View } from "react-native";
import { styles } from "../../StyleSheet";

import AllPostsForUser from "./AllPostsForUser";
import CreatePost from "../Posts/CreatePost";
import AllUserJoinedCommunities from "../Elements/AllUserJoinedCommunities";

export default YourFeed = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={[styles.wid100p, styles.flex1, { backgroundColor: "white" }]}
    >
      <AllUserJoinedCommunities />
      <View>
        <AllPostsForUser />
      </View>
    </ScrollView>
  );
};
