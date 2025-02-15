import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (

    <View style={style.container}>
      <Text style={style.text}>About Screen</Text>
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
