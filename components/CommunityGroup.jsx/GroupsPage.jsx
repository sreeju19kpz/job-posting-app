import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import useUpdateData from "../api/UpdateData";
import { useNavigation } from "@react-navigation/native";
import AllCommunityPosts from "../community/AllCommunityPosts";

const GroupsPage = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [iData, setIData] = useState(false);
  const { loading, faliled, data } = useFetchData({
    url: `communities/${id}/banner/65747efc58fcbea05ee7d085`,
  });
  const {
    updateData,
    data: updatedData,
    loading: updating,
    faliled: updateFailed,
    status,
  } = useUpdateData({ url: `communities/${id}/join` });

  useEffect(() => {
    data && setIData(data.data.isMember);
  }, [data]);

  useEffect(() => {
    updatedData && setIData(updatedData.isMember);
  }, [updatedData]);

  async function update() {
    await updateData({ userId: "65747efc58fcbea05ee7d085" });
    iData && navigation.goBack();
  }
  return (
    <ScrollView style={[styles.wid100p]}>
      {data && (
        <View style={[styles.wid100p]}>
          <View style={[styles.wid100p]}>
            <Image
              source={{ uri: data.data.thumbnail }}
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
                {data.data.name}
              </Text>
              <Pressable
                onPress={update}
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
                  {`${iData ? "Leave" : "join"}`}
                </Text>
              </Pressable>
            </View>
            {iData && (
              <View>
                <AllCommunityPosts id={id} />
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default GroupsPage;
