import { View, Text, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../../StyleSheet";
import { useLoginMutation } from "../Features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/auth/authSlice";

export default LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errmsg, setErrmsg] = useState();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials(userData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>email</Text>
        <TextInput
          placeholder="enter your email"
          value={email}
          onChangeText={setUser}
        />
        <Text>password</Text>
        <TextInput
          placeholder="enter your password"
          value={password}
          onChangeText={setPwd}
        />
        <Pressable onPress={handleSubmission}>
          <Text>click</Text>
        </Pressable>
      </View>
    </View>
  );
};
