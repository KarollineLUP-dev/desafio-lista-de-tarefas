import { Text, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Auth from "@/app/components/Auth";
import { globalStyles } from "../styles/globalStyles";
import { Header } from "@rneui/themed";
import AppHeader from "../components/Header";

export default function Home() {
  return (
    <View>
      <View>
      <AppHeader />
      <Text style={{ padding: 20, fontSize: 18 }}>Bem-vindo à tela inicial!</Text>
    </View>
    </View>
  );
}
