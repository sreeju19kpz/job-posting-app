import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";

export default Register = () => {
  return (
    <View>
      <View>
        <Text>username</Text>
        <TextInput placeholder="enter your username" />
        <Text>password</Text>
        <TextInput placeholder="enter your password" />
        <Pressable>
          <Text>text</Text>
        </Pressable>
      </View>
    </View>
  );
};
