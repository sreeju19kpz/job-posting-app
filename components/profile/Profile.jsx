import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import AllCommunityPosts from "../community/AllCommunityPosts";
import PostBanner from "../Posts/PostBanner";

const Profile = () => {
  const {
    loading,
    faliled,
    data: profile,
  } = useFetchData({
    url: `users/65747efc58fcbea05ee7d085`,
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
    <View style={[styles.wid100p]}>
      {profile && (
        <ScrollView style={[styles.wid100p, styles.gap20]}>
          <View style={[styles.wid100p]}>
            <View style={[styles.wid100p, styles.hei150]}>
              <Image
                style={[styles.wid100p, styles.hei150]}
                source={{ uri: profile?.user?.dp }}
              />
              <Image
                style={[
                  styles.wid70,
                  styles.hei70,
                  styles.posAbs,
                  { top: 112.5, left: 20, borderRadius: 35 },
                ]}
                source={{ uri: profile?.user?.dp }}
              />
            </View>
            <View
              style={[
                styles.hei70,
                styles.wid100p,
                styles.flexDirRow,
                styles.jusConSpcAro,
                styles.aliIteFleEnd,
                styles.padHor20,
                styles.borBotWid1,
                styles.borColBlaLigP1,
                styles.padVer1,
              ]}
            >
              <Text style={[styles.wid100p, styles.fonSiz22, styles.fonWei700]}>
                {profile?.user?.name}
              </Text>
            </View>
          </View>
          <View style={[styles.marTop20, styles.gap20]}>
            {profile.user.posts.map((item, index) => {
              return <PostBanner postId={item} key={index} />;
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Profile;
