import { Text, View, StyleSheet } from "react-native";
import AppHeader from "../components/Header";

export default function About() {
  return (

    <View>
    <AppHeader />
    <Text style={{ padding: 20, fontSize: 18 }}>Configurações</Text>
  </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27345e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
