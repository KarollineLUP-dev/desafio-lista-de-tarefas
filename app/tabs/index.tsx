import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (

    <View style={style.container}>
      <Text style={style.text}>Home Screen</Text>
      <Link href="/tabs/about" style={style.button}>Go to About Screen</Link>
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  }
});
