import { Text, View } from "react-native";
import PostBanner from "../Posts/PostBanner";
import { styles } from "../../StyleSheet";
import { useGetAllPostsFromCommunityMutation } from "../Features/posts/postsApiSlice";
import { useEffect, useState } from "react";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";

export default AllCommunityPosts = ({ id }) => {
  const [getAllPostsFromCommunity, { isLoading }] =
    useGetAllPostsFromCommunityMutation();
  const [data, setData] = useState(); // community posts

  useEffect(() => {
    const getAllC = async () => {
      const data = await getAllPostsFromCommunity({ id: id }).unwrap();
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
    <View style={[styles.wid100p, styles.aliIteCnt, styles.gap10]}>
      {data?.map((item, index) => {
        return <PostBanner key={index} post={item} />;
      })}
    </View>
  );
};
