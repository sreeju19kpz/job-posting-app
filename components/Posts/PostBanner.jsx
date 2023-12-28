import { Pressable, Text, View } from "react-native";
import Author from "./Author";
import Community from "./Community";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
import LAndCS from "./LAndCS";
import { useRoute } from "@react-navigation/native";

export default PostBanner = ({ post }) => {
  const route = useRoute();
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.borWid1,
        styles.borColBlaLigP1,
        styles.borRad10,
        styles.bakColWhi,
      ]}
    >
      <View style={[styles.wid100p, styles.gap10, styles.jusConSpcAro]}>
        <View
          style={[
            styles.flexDirRow,
            styles.wid100p,
            styles.padHor20,
            styles.padVer10,
          ]}
        >
          <Author
            name={post?.authorId?.name}
            id={post?.authorId?._id}
            dp={post?.authorId?.dp}
          />
          {post?.type === "COMMUNITY_POST" && route.name !== "group" && (
            <>
              <View style={[styles.aliIteCnt, styles.jusConCnt]}>
                <AntDesign
                  style={{ marginBottom: 13 }}
                  name="caretright"
                  size={10}
                  color="black"
                />
              </View>
              <Community
                name={post?.communityId?.name}
                id={post?.communityId?._id}
              />
            </>
          )}
        </View>
        <View style={[styles.padHor20]}>
          <Text style={[styles.fonSiz18, { lineHeight: 30 }]}>
            {post?.description}
          </Text>
        </View>
        <LAndCS id={post?._id} />
      </View>
    </View>
  );
};
