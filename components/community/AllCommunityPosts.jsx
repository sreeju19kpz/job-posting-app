import { Text, View } from "react-native";
import useFetchData from "../api/FetchData";
import PostBanner from "../Posts/PostBanner";
import { styles } from "../../StyleSheet";

export default AllCommunityPosts = ({ id }) => {
  const { loading, faliled, data } = useFetchData({
    url: `communities/${id}/posts`,
  });

  if (loading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  if (faliled)
    return (
      <View>
        <Text>faliled</Text>
      </View>
    );
  return (
    <View
      style={[styles.wid100p, styles.aliIteCnt, styles.gap10, styles.pad10]}
    >
      {data &&
        data.data.posts.map((item, index) => {
          return <PostBanner key={index} postId={item} />;
        })}
    </View>
  );
};
