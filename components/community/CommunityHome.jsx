import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import YourFeed from "./YourFeed";
import GroupsPage from "./CommunityGroup.jsx/GroupsPage";
const Stack = createNativeStackNavigator();

export default CommunityHome = () => {
  return (
    <Stack.Navigator initialRouteName="Your Feed">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
        }}
        name="Your Feed"
        component={YourFeed}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
        }}
        name="group"
        component={GroupsPage}
      />
    </Stack.Navigator>
  );
};
