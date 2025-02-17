import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../tabs/home";
import CustomHeader from "./CustomHeader";

const Drawer = createDrawerNavigator();

export default function SubHeader() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomHeader {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
