import { Image, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";

export default CommunityPicker = ({ id }) => {
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
        <View
          style={[
            styles.jusConCnt,
            styles.aliIteCnt,
            styles.hei100p,
            styles.wid100p,
            styles.borRad10,
            { elevation: 10, backgroundColor: "white" },
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
          <Text style={[styles.fonSiz12, styles.texAliCnt]}>
            {banner.data.name}
          </Text>
        </View>
      )}
    </View>
  );
};
