import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupsPage from "../CommunityGroup.jsx/GroupsPage";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default ProfileHome = () => {
  return (
    <Stack.Navigator initialRouteName="user">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
        }}
        name="user"
        component={Profile}
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
