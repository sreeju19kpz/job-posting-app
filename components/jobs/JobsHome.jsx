import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllJobs from "./AllJobs";
import JobDetails from "./JobDetails";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "../../StyleSheet";
export default JobsHome = () => {
  return (
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
          headerRight: () => (
            <Pressable style={[styles.padHor4]}>
              <EvilIcons name="search" size={26} color="#ffffff" />
            </Pressable>
          ),
        }}
        name="Jobs"
        component={AllJobs}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
        }}
        name="Details"
        component={JobDetails}
      />
    </Stack.Navigator>
  );
};
