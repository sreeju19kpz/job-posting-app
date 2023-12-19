import { Pressable, Text, View } from "react-native";
import useFetchData from "../api/FetchData";
import Author from "./Author";
import Community from "./Community";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
import LAndCS from "./LAndCS";
import { useState } from "react";

export default PostBanner = ({ postId }) => {
 
  const {
    loading: postLoading,
    faliled: postNotFound,
    data: postData,
  } = useFetchData({ url: `posts/${postId}/banner` });

  if (postLoading)
    return (
      <View>
        <Text>aa</Text>
      </View>
    );
  if (postNotFound)
    return (
      <View>
        <Text>aa</Text>
      </View>
    );
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        ,
        styles.borWid1,
        styles.borColBlaLigP1,
        styles.borRad10,
      ]}
    >
      {postData && (
        <View style={[styles.wid100p, styles.pad20, styles.gap10]}>
          <View style={[styles.flexDirRow, styles.wid100p]}>
            <Author id={postData.data.authorId} />
            <View style={[styles.aliIteCnt, styles.jusConCnt]}>
              <AntDesign
                style={{ marginBottom: 13 }}
                name="caretright"
                size={10}
                color="black"
              />
            </View>
            <Community id={postData.data.communityId} />
          </View>
          <View>
            <Text style={[styles.fonSiz18, { lineHeight: 30 }]}>
              {postData.data.description}
            </Text>
          </View>
          <LAndCS id={postData.data._id} />
        </View>
      )}
    </View>
  );
};
