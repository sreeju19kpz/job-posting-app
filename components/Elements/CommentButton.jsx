import { Modal, Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../StyleSheet";
import QuickCommentBox from "../Posts/QuickCommentBox";
import { useCallback, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CommentBox from "../Posts/CommentBox";

export default CommentButton = ({ id }) => {
  const [qc, setQc] = useState(false);
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
        onPress={() => setQc(!qc)}
        style={[
          styles.jusConCnt,
          styles.aliIteCnt,
          styles.flexDirRow,
          styles.gap20,
        ]}
      >
        <View style={[styles.traScaM1]}>
          <FontAwesome5 name="comment-dots" size={24} color="black" />
        </View>
        <Text style={[styles.fonSiz12]}>Comment </Text>
      </Pressable>
      {qc && (
        <Modal transparent={true} animationType="fade" style={[styles.flex1]}>
          <View style={[styles.flex1, { backgroundColor: "rgba(0,0,0,.7)" }]}>
            <GestureHandlerRootView style={[styles.flex1]}>
              <View style={[styles.flex1, styles.aliIteCnt, styles.jusConCnt]}>
                <QuickCommentBox End={() => setQc(!qc)}>
                  <CommentBox postId={id} />
                </QuickCommentBox>
              </View>
            </GestureHandlerRootView>
          </View>
        </Modal>
      )}
    </View>
  );
};
