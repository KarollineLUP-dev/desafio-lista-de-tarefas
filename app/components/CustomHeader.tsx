import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/globalStyles"; // Importa os estilos

const logoImage = require("../../assets/images/logo-cejam.png");

export default function CustomHeader(props: DrawerContentComponentProps) {
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log("Usuário saiu");
    navigation.navigate("login" as never); // Redireciona para a tela de login
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={globalStyles.drawerHeaderContainer}>
        <Image source={logoImage} style={globalStyles.profileImageLarge} />
        <Text style={globalStyles.text}>Usuário</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}
