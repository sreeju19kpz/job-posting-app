// likes and comments session

import { View, Text } from "react-native";
import useFetchData from "../api/FetchData";
import { styles } from "../../StyleSheet";
import LikeButton from "../Elements/LikeButton";
import useUpdateData from "../api/UpdateData";

import CommentButton from "../Elements/CommentButton";
export default LAndCS = ({ id }) => {
  const { loading, faliled, data } = useFetchData({
    url: `posts/${id}/likes/65747efc58fcbea05ee7d085`,
  });
  const {
    updateData,
    data: updatedData,
    status,
  } = useUpdateData({
    url: `posts/${id}/likes/65747efc58fcbea05ee7d085`,
  });

  async function update() {
    await updateData({ userId: "65747efc58fcbea05ee7d085" });
    if (status === 201 && updatedData) {
    } else return;
  }
  if (loading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  if (faliled)
    return (
      <View>
        <Text>failed</Text>
      </View>
    );
  return (
    <View style={[styles.wid100p, styles.hei70, styles.gap5]}>
      <View
        style={[
          styles.wid100p,
          styles.flexDirRow,
          styles.jusConSpcAro,
          styles.hei50,
        ]}
      >
        <LikeButton
          isLiked={
            updatedData ? updatedData.isLiked : data ? data.isLiked : false
          }
          onClick={update}
        />

        <CommentButton id={id} />
      </View>
    </View>
  );
};
