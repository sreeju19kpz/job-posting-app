import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "../../StyleSheet";
import AllInternships from "./AllInternships";
import InternshipsDetails from "./InternshipsDetails";

const Stack = createNativeStackNavigator();

export default InternshipsHome = () => {
  return (
    <Stack.Navigator initialRouteName="Internships">
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
        name="Internships"
        component={AllInternships}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
        }}
        name="Details"
        component={InternshipsDetails}
      />
    </Stack.Navigator>
  );
};
