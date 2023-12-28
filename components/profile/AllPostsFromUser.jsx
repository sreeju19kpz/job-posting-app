import { ScrollView, Text, View } from "react-native";
import PostBanner from "../Posts/PostBanner";
import { styles } from "../../StyleSheet";
import { useEffect, useState } from "react";
import { useGetAllPostsFromUserMutation } from "../Features/posts/postsApiSlice";
import CreatePost from "../Posts/CreatePost";

export default AllPostsFromUser = () => {
  const [getAllPostsFromUser, { isLoading }] = useGetAllPostsFromUserMutation();
  const [data, setData] = useState(); // community posts

  useEffect(() => {
    const getAllC = async () => {
      const data = await getAllPostsFromUser().unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  return (
    <ScrollView
      contentContainerStyle={[
        styles.bakColWhi,

        styles.gap10,
        styles.marTop5,
        styles.pad10,
      ]}
    >
      <CreatePost />
      {data?.map((item, index) => {
        return <PostBanner key={index} post={item} />;
      })}
    </ScrollView>
  );
};
