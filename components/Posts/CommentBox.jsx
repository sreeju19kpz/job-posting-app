import { Text, View } from "react-native";
import React from "react";
import useFetchData from "../api/FetchData";
import SingleComment from "./SingleComment";

const CommentBox = ({ postId }) => {
  const { loading, faliled, data } = useFetchData({
    url: `posts/${postId}/comments`,
  });

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
    <View>
      {data &&
        data.data.map((item, index) => {
          return <SingleComment key={index} comment={item} />;
        })}
    </View>
  );
};

export default CommentBox;
