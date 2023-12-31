import { View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useCreatePostMutation } from "../Features/posts/postsApiSlice";

export default CreatePost = ({ type, communityId, setMypost }) => {
  const [description, setDescription] = useState();
  const [state, setState] = useState(false);
  const [createPost, { isLoading }] = useCreatePostMutation();
  const post = async () => {
    const data = await createPost({
      type: type,
      communityId: communityId,
      description: description,
    });
    data && setMypost(data.data);
    setDescription("");
    setState(() => !state);
  };
  return (
    <>
      <View style={[styles.wid100p]}>
        <View style={[styles.wid100p, styles.hei150]}>
          <Pressable
            onPress={() => setState(!state)}
            style={[
              styles.wid100p,
              styles.hei100p,
              styles.JusConFleStr,
              styles.aliIteFleStr,
              styles.borWid1,
              styles.borRad10,
              styles.pad10,
              styles.borColBlaLigP1,
              styles.borWid1,
            ]}
          >
            <Text style={[styles.wid100p, styles.hei33, styles.fonColBlaLig1]}>
              type here something...
            </Text>
          </Pressable>
        </View>
      </View>
      {state && (
        <Modal animationType="slide" transparent>
          <View
            style={[
              styles.hei50,
              styles.bacColBlu,
              styles.wid100p,
              styles.jusConSpcBtw,
              styles.aliIteCnt,
              styles.flexDirRow,
              styles.padHor10,
            ]}
          >
            <Pressable onPress={() => setState(!state)}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
          </View>
          <View
            style={[
              styles.wid100p,
              styles.hei100p,
              styles.bakColWhi,
              styles.pad20,
              styles.gap20,
            ]}
          >
            <TextInput
              style={[
                styles.borRad10,

                styles.pad10,
                styles.hei150,
                styles.aliIteFleStr,
                styles.borWid1,
                styles.borColBlu1,
                {
                  textAlign: "left",
                  textAlignVertical: "top",
                },
              ]}
              value={description}
              onChangeText={setDescription}
              placeholder="type something here..."
            />
            <View
              style={[styles.jusConSpcBtw, styles.aliIteCnt, styles.flexDirRow]}
            >
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10,
                  styles.aliIteCnt,
                  styles.padHor10,
                ]}
              >
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={18}
                  color="#1F51FF"
                />
                <Feather name="image" size={17} color="#1F51FF" />
                <MaterialIcons name="gif" s size={22} color="#1F51FF" />
                <FontAwesome name="smile-o" size={18} color="#1F51FF" />
                <AntDesign name="link" size={14} color="#1F51FF" />
              </View>
              <View style={[styles.padHor10]}>
                <Pressable onPress={post}>
                  <Ionicons
                    name={description ? "send-sharp" : "send-outline"}
                    size={24}
                    color="#1F51FF"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
