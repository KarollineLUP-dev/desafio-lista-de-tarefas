import { Text, View, StyleSheet } from "react-native";
import { GoogleSignin} from "@react-native-google-signin/google-signin";
import Auth from "@/components/Auth";


export default function Home() {
  return (

    <View style={style.container}>
      <Text style={style.text}>Home Screen</Text>
      <Auth />
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
