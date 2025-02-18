import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../tabs/home";
import CustomHeader from "../components/header/CustomHeader";
import { AuthProvider } from "../components/auth/AuthContext";

const Drawer = createDrawerNavigator();
export default function TabLayout() {
  return (
    <AuthProvider>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomHeader {...props} />}
      >
        <Drawer.Screen name="Início" component={Home} />
      </Drawer.Navigator>
    </AuthProvider>
  );
}
