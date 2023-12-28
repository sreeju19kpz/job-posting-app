import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./Profile";
import GroupsPage from "../community/CommunityGroup.jsx/GroupsPage";

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

