import { Image, Text, View } from "react-native";
import useFetchData from "../api/FetchData";
import { styles } from "../../StyleSheet";
export default Author = ({ id }) => {
  const { loading, faliled, data } = useFetchData({
    url: `users/${id}/banner`,
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
    <View style={[styles.flexDirRow]}>
      {data && (
        <View style={[styles.flexDirRow, styles.gap10]}>
          <View style={[styles.hei33, styles.wid33]}>
            <Image
              source={{ uri: data.data.dp }}
              style={[
                styles.wid100p,
                styles.hei100p,
                styles.objFitCov,
                { borderRadius: 33 / 2 },
              ]}
            ></Image>
          </View>
          <View>
            <Text>{data.data.name} </Text>
          </View>
        </View>
      )}
    </View>
  );
};
