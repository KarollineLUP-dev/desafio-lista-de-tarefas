import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../tabs/home";
import About from "../tabs/about";
import CustomHeader from "../components/CustomHeader";

const Drawer = createDrawerNavigator();
export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomHeader {...props} />}
    >
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Sobre" component={About} />
    </Drawer.Navigator>
  );
}

/* export function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFF",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: `Home`,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: `About`,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
} */

