import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Header, Icon } from "@rneui/themed";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";

const logoImage = require("../../../assets/images/logo-cejam.png");

interface AppHeaderProps{
  onSearch: (text: string) => void;
}

export default function AppHeader({onSearch}: AppHeaderProps) {
  const navigation = useNavigation();

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTask, setSeachTasks] = useState("");

  const handleSearch = (text: string) => {
    setSeachTasks(text);
    onSearch(text);
  }
  const closeSearch = () => {
    setSeachTasks("");
    setSearchVisible(false);
  };

  return (
    <View>
      <Header
        leftComponent={
          <View style={globalStyles.leftComponent}>
            <TouchableOpacity
              style={globalStyles.rowComponent}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Image source={logoImage} style={globalStyles.profileImage} />
              <Text style={globalStyles.userName}>Usuário</Text>
            </TouchableOpacity>
          </View>
        }
        rightComponent={
            <View style={globalStyles.searchContainer}>
              {searchVisible && (
                <TextInput
                  style={globalStyles.searchInput}
                  placeholder="Pesquisar..."
                  placeholderTextColor="#ccc"
                  value={searchTask}
                  onChangeText={handleSearch}
                  autoCapitalize="none"
                  clearButtonMode="while-editing"
                  onBlur={closeSearch}
                />
              )}
            

            <TouchableOpacity onPress={() => setSearchVisible(true)}>
              <Icon
                name="search"
                color="#fff"
                style={globalStyles.headerIcon}
              />
            </TouchableOpacity>
          </View>
        }
        containerStyle={globalStyles.headerContainer}
      />
    </View>
  );
}
