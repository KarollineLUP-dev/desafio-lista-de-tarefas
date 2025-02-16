import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { globalStyles } from "./styles/globalStyles";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Não localizamos" }} />
      <View style={globalStyles.container}>
        <Link href={"/login"} style={globalStyles.button}>
          Voltar para a tela de Login
        </Link>
      </View>
    </>
  );
}
