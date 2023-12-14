import { Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import CommunityPicker from "../Elements/CommunityPicker";
export default YourFeed = () => {
  const {
    loading,
    faliled,
    data: communities,
  } = useFetchData({
    url: `users/65747efc58fcbea05ee7d085/communities`,
  });
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
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
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.flex1,
        { backgroundColor: "white" },
      ]}
    >
      <View style={styles.pad20}>
        {communities &&
          communities.communities.map((item, index) => {
            return <CommunityPicker key={index} id={item} />;
          })}
      </View>
    </View>
  );
};
