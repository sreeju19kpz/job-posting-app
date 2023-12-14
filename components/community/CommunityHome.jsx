import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import YourFeed from "./YourFeed";

const Tab = createMaterialTopTabNavigator();

export default CommunityHome = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={YourFeed} />
      <Tab.Screen name="discover" component={YourFeed} />
    </Tab.Navigator>
  );
};
