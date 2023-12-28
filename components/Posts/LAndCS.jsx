// likes and comments session
import { useFocusEffect } from "@react-navigation/native";

import { View, Text } from "react-native";
import { styles } from "../../StyleSheet";
import LikeButton from "../Elements/LikeButton";
import CommentButton from "../Elements/CommentButton";
import { useCallback, useEffect, useState } from "react";
import {
  useLikePostMutation,
  useGetIsUserLikedPostMutation,
} from "../Features/posts/postsApiSlice";
import { useNavigation } from "@react-navigation/native";

export default LAndCS = ({ id, isLiked }) => {
  const navigation = useNavigation();
  const [likePost, { isLoading }] = useLikePostMutation();
  const [getIsUserLikedPost, { isLoading: loadingIsLiked }] =
    useGetIsUserLikedPostMutation();
  const [liked, setLiked] = useState(); // user like

  const getAllC = async () => {
    const data = await likePost({ id: id }).unwrap();
    data && setLiked(data?.data);
  };
  useFocusEffect(
    useCallback(() => {
      const refetch = async () => {
        const data = await getIsUserLikedPost({ id: id }).unwrap();
        data && setLiked(data.isLiked);
      };
      refetch();
    }, [navigation])
  );

  return (
    <View style={[styles.wid100p, styles.gap5, styles.padVer10]}>
      <View
        style={[
          styles.wid100p,
          styles.flexDirRow,
          styles.jusConSpcAro,
          styles.hei50,
        ]}
      >
        <LikeButton isLiked={liked} onClick={getAllC} />
        <CommentButton id={id} />
      </View>
    </View>
  );
};
