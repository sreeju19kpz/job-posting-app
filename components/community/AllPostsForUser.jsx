import { Text, View } from "react-native";
import PostBanner from "../Posts/PostBanner";
import { styles } from "../../StyleSheet";
import { useGetAllPostsForUserMutation } from "../Features/posts/postsApiSlice";
import { useEffect, useState } from "react";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";

export default AllPostsForUser = () => {
  const [getAllPostsForUser, { isLoading }] = useGetAllPostsForUserMutation();
  const [data, setData] = useState(); // user feed posts

  useEffect(() => {
    const getAllC = async () => {
      const data = await getAllPostsForUser().unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.gap10]}>
        {Array.from({ length: 3 }).map((_, i) => {
          return <PostBannerSkeleton key={i} />;
        })}
      </View>
    );
  }

  return (
    <View
      style={[styles.wid100p, styles.aliIteCnt, styles.gap10, styles.pad10]}
    >
      {data?.map((item, index) => {
        return <PostBanner key={index} post={item} />;
      })}
    </View>
  );
};
