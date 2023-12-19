import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import { useNavigation } from "@react-navigation/native";

export default CommunityPicker = ({ id }) => {
  const navigation = useNavigation();
  const {
    loading,
    faliled,
    data: banner,
  } = useFetchData({ url: `communities/${id}/banner` });
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
      style={[styles.wid70, styles.hei70, styles.aliIteCnt, styles.jusConCnt]}
    >
      {banner && (
        <Pressable
          onPress={() => navigation.navigate("group", { id: id })}
          style={[
            styles.jusConCnt,
            styles.aliIteCnt,
            styles.hei100p,
            styles.wid100p,
            styles.borRad10,
            { backgroundColor: "white" },
          ]}
        >
          <Image
            source={{ uri: banner.data.thumbnail }}
            style={[
              styles.hei50,
              styles.wid50,
              styles.objFitCov,
              styles.borRad10,
              ,
              { marginTop: 5 },
            ]}
          />
          <Text
            numberOfLines={2}
            style={[
              styles.texAliCnt,
              { overflow: "hidden", width: 50, fontSize: 10, height: 24 },
            ]}
          >
            {banner.data.name}
          </Text>
        </Pressable>
      )}
    </View>
  );
};
