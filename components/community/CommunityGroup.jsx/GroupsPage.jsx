import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../StyleSheet";
import AllCommunityPosts from "../AllCommunityPosts";

import {
  useGetSingleCommunityMutation,
  useJoinCommunityMutation,
} from "../../Features/community/communityApiSlice";
import thumbnail from "../../../assets/thumbnail.png";
import CreatePost from "../../Posts/CreatePost";
import PostBanner from "../../Posts/PostBanner";
const GroupsPage = ({ route, navigation }) => {
  const { id } = route.params;

  const [getSingleCommunity, { isLoading }] = useGetSingleCommunityMutation();
  const [joinCommunity, { isLoading: joining }] = useJoinCommunityMutation();
  const [data, setData] = useState(); // communities
  const [myPosts, setMyposts] = useState();
  // navigation.setOptions({ title: "New Title" });
  useEffect(() => {
    const getAllC = async () => {
      const data = await getSingleCommunity({ id: id }).unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);
  const addMyPosts = (post) => {
    setMyposts((prev) => (prev ? [post, ...prev] : [post]));
  };

  const join = async () => {
    const data = await joinCommunity({ id: id }).unwrap();
    data &&
      setData((prev) => ({
        ...prev,
        isMember: data.isMember,
      }));
  };
  if (isLoading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  return (
    <ScrollView
      keyboardShouldPersistTaps="allways"
      style={[styles.wid100p, styles.bakColWhi]}
    >
      <View style={[styles.wid100p]}>
        <View style={[styles.wid100p]}>
          <Image
            source={data?.thumbnail ? { uri: data?.thumbnail } : thumbnail}
            style={[styles.wid100p, styles.hei150, styles.objFitCov]}
          />
        </View>
        <View>
          <View
            style={[
              styles.wid100p,
              styles.hei70,
              styles.pad20,
              styles.jusConSpcBtw,
              styles.borBotWid1,
              styles.borColBlaLigP1,
              styles.flexDirRow,
            ]}
          >
            <Text style={[styles.fonSiz22, styles.fonWei900]}>
              {data?.name}
            </Text>
            <Pressable
              onPress={join}
              style={[
                styles.wid70,
                styles.hei33,
                styles.bacColBlu,
                styles.borRad10,
                styles.jusConCnt,
                styles.aliIteCnt,
              ]}
            >
              <Text
                style={[styles.fonSiz15, styles.fonWei900, styles.fonColWhi]}
              >
                {`${data?.isMember ? "Leave" : "join"}`}
              </Text>
            </Pressable>
          </View>
          {data?.isMember && (
            <View
              style={[
                styles.wid100p,
                styles.bakColWhi,
                styles.aliIteCnt,
                styles.pad10,
                styles.gap10,
              ]}
            >
              <CreatePost
                communityId={id}
                type={"COMMUNITY_POST"}
                setMypost={(data) => addMyPosts(data)}
              />
              {myPosts?.map((post, i) => {
                return <PostBanner key={i} post={post} />;
              })}
              <AllCommunityPosts id={id} />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default GroupsPage;
