import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header, Icon } from "@rneui/themed";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";
import SearchList from "../Search";

const logoImage = require("../../../assets/images/logo-cejam.png");

export default function AppHeader() {
  const navigation = useNavigation();

  return (
    <View>
      <Header
        leftComponent={
          <View style={globalStyles.leftComponent}>
            <TouchableOpacity style={globalStyles.rowComponent} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={logoImage} style={globalStyles.profileImage} />
              <Text style={globalStyles.userName}>Usuário</Text>
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <Icon 
            name="search" 
            color="#fff" 
            style={globalStyles.headerIcon}
            onPress={() => SearchList()} 
          />
        }
        containerStyle={globalStyles.headerContainer}
      />
    </View>
  );
}

