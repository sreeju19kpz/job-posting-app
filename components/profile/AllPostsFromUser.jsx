import { ScrollView, Text, View } from "react-native";
import PostBanner from "../Posts/PostBanner";
import { styles } from "../../StyleSheet";
import { useEffect, useState } from "react";
import { useGetAllPostsFromUserMutation } from "../Features/posts/postsApiSlice";
import CreatePost from "../Posts/CreatePost";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";
export default AllPostsFromUser = () => {
  const [getAllPostsFromUser, { isLoading }] = useGetAllPostsFromUserMutation();
  const [data, setData] = useState(); // community posts
  const [newPost, setNewPost] = useState();

  const createNewPost = (data) => {
    setNewPost((prev) => (prev ? [data, ...prev] : [data]));
  };

  useEffect(() => {
    const getAllC = async () => {
      const data = await getAllPostsFromUser().unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);

  if (isLoading) {
    return (
      <View
        style={[
          styles.bakColWhi,
          styles.gap10,
          styles.marTop5,
          styles.pad10,
          styles.flex1,
          styles.fleGro1,
        ]}
      >
        <CreatePost type={"USER_POST"} />
        {Array.from({ length: 3 }).map((_, i) => {
          return <PostBannerSkeleton key={i} />;
        })}
      </View>
    );
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="allways"
      nestedScrollEnabled={true}
      style={[styles.flex1]}
      contentContainerStyle={[
        styles.bakColWhi,
        styles.gap10,
        styles.marTop5,
        styles.pad10,
        styles.fleGro1,
      ]}
    >
      <CreatePost
        type={"USER_POST"}
        setMypost={(data) => createNewPost(data)}
      />
      {newPost?.map((item, index) => {
        return <PostBanner key={index} post={item} />;
      })}
      {data?.map((item, index) => {
        return <PostBanner key={index} post={item} />;
      })}
    </ScrollView>
  );
};
