import { View, Text, Image } from "react-native";
import React from "react";
import useFetchData from "../api/FetchData";
import { styles } from "../../StyleSheet";

const SingleComment = ({ comment }) => {
  const { loading, faliled, data } = useFetchData({
    url: `users/${comment.uid}/banner`,
  });
  return (
    <View>
      {data && (
        <View
          style={[
            styles.wid100p,
            styles.pad20,
            styles.flexDirRow,
            styles.gap10,
          ]}
        >
          <View style={[]}>
            <Image
              style={[
                styles.hei33,
                styles.wid33,
                styles.objFitCov,
                { borderRadius: 33 / 2 },
              ]}
              source={{ uri: `${data.data.dp}` }}
            />
          </View>
          <View
            style={[
              styles.bacColgreLig1,
              styles.fleGro1,
              styles.padHor10,
              styles.padVer1,
              styles.borRad15,
              { paddingBottom: 4 },
            ]}
          >
            <Text style={[styles.linHig20, styles.fonWei700]}>
              {data.data.name}
            </Text>
            <Text style={[styles.linHig20]}>{comment.comment}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SingleComment;
