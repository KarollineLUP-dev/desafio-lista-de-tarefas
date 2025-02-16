import { Text, View } from "react-native";
import { globalStyles } from "./styles/globalStyles";
import { FloatingImage } from "./components/Animations";
import Auth from "@/app/components/Auth";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={globalStyles.loginContainer}>
      <Link href={"/tabs/home"} style={globalStyles.button}>
        Home
      </Link>
      <View style={globalStyles.loginBox}>
        <FloatingImage
          source={require("../assets/images/logo-cejam.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.text}>Olá, Seja Muito Bem-Vindo(a)!</Text>
      </View>
      <Auth />
    </View>
  );
}
