import Auth from "@/components/Auth";
import { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated, Easing } from "react-native";

export default function Login() {
  const floatAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: 10,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);
  return (
    
    <View style={styles.container}>
    <View style={styles.box}>
      <Animated.Image
        source={require("../assets/images/logo-cejam.png")}
        style={[styles.logo, { transform: [{ translateY: floatAnim }] }]}
      />
      <Text style={styles.text}>Olá, Seja Muito Bem-Vindo(a)!</Text>
    </View>
    <Auth />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00264D",
  },
  box: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
  },
  logo: {
    width: 170,
    height: 150,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});


