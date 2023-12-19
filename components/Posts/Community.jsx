import { Image, Pressable, Text, View } from "react-native";
import useFetchData from "../api/FetchData";
import { styles } from "../../StyleSheet";
import { useNavigation } from "@react-navigation/native";
export default Author = ({ id }) => {
  const navigation = useNavigation();
  const { loading, faliled, data } = useFetchData({
    url: `communities/${id}/name`,
  });

  if (loading)
    return (
      <View>
        <Text>a</Text>
      </View>
    );
  if (faliled)
    return (
      <View>
        <Text>b</Text>
      </View>
    );
  return (
    <View style={[styles.flexDirRow, styles.fleGro1, { paddingLeft: 5 }]}>
      {data && (
        <Pressable onPress={() => navigation.navigate("group", { id: id })}>
          <Text>{data.data.name} </Text>
        </Pressable>
      )}
    </View>
  );
};
