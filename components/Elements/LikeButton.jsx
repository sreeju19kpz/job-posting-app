import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../../StyleSheet";

export default LikeButton = ({ onClick, isLiked }) => {
  return (
    <View
      style={[
        styles.jusConCnt,
        styles.wid140,
        styles.borWid1,
        styles.borColBlaLigP1,
        styles.borRad10,
      ]}
    >
      <Pressable
        onPress={onClick}
        style={[
          styles.jusConCnt,
          styles.aliIteCnt,
          styles.flexDirRow,
          styles.gap20,
        ]}
      >
        <View style={[styles.traScaM1]}>
          {isLiked ? (
            <AntDesign name="heart" size={20} color="blue" />
          ) : (
            <AntDesign name="hearto" size={20} color="black" />
          )}
        </View>
        <Text style={[styles.fonSiz12, isLiked && styles.fonColIndBlu]}>{`${
          isLiked ? "liked" : "like"
        } `}</Text>
      </Pressable>
    </View>
  );
};
