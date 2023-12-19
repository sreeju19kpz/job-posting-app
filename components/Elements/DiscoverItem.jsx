import { View, Text, ImageBackground, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import useFetchData from "../api/FetchData";
import useUpdateData from "../api/UpdateData";
import { useNavigation } from "@react-navigation/native";

export default DiscoverItem = ({ id }) => {
  const [state, setState] = useState(false);
  const navigation = useNavigation();
  const {
    loading,
    faliled,
    data: community,
  } = useFetchData({ url: `communities/${id}/banner` });

  const {
    updateData,
    data: updatedData,
    loading: updating,
    faliled: updateFailed,
    status,
  } = useUpdateData({ url: `communities/${id}/join` });
  useEffect(() => {
    community && setState(community.data.isMember);
  }, [community]);
  useEffect(() => {
    status === 201 && setState(updatedData.isMember);
  }, [updatedData]);

  const update = async () => {
    await updateData({ userId: "65747efc58fcbea05ee7d085" });
  };

  return (
    <View style={[styles.wid100p, styles.hei70]}>
      <Pressable
        onPress={() => navigation.navigate("group", { id: id })}
        style={[styles.wid100p, styles.hei70]}
      >
        <ImageBackground
          source={{ uri: community?.data?.thumbnail }}
          style={[
            styles.wid100p,
            styles.hei70,
            styles.objFitCov,
            styles.borRad10,
            { overflow: "hidden" },
          ]}
        />
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.jusConSpcBtw,
            styles.aliIteCnt,
            styles.posAbs,
            styles.hei100p,
            styles.pad10,
          ]}
        >
          <View style={[styles.aliIteCnt, styles.hei100p, styles.jusConCnt]}>
            <Text
              style={[
                styles.padHor4,
                styles.fonColWhi,
                styles.bakColWhiP3,
                styles.fonSiz18,
                styles.fonWei700,
                styles.jusConCnt,
                styles.aliIteCnt,
                { borderRadius: 5, paddingBottom: 3 },
              ]}
            >
              {community?.data?.name}
            </Text>
          </View>
          <View>
            <Button title={state ? "leave " : "join "} onPress={update} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
