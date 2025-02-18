import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles"; // Importa os estilos
import { useAuth } from "../auth/AuthContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomHeader(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  const { user } = useAuth();

  const signOutWithGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess(); // Revoga o acesso sem desassociar a conta
      await GoogleSignin.signOut(); // Desloga do Google
      await AsyncStorage.removeItem("@user"); // Remove usuário do armazenamento
      navigation.navigate("login" as never); // Redireciona para a tela de login
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={globalStyles.drawerHeaderContainer}>
        <Image source={{ uri: user?.photo }} style={globalStyles.profileImageLarge} />
        <Text style={globalStyles.text}>{user?.name}</Text>
        <Text>{user?.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={signOutWithGoogle} />
    </DrawerContentScrollView>
  );
}
