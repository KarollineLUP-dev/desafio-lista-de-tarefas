import React, { useEffect, useRef } from "react";
import { Animated, Easing, ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

interface FloatingImageProps {
  source: ImageSourcePropType; 
  style?: StyleProp<ImageStyle>;
}

export function FloatingImage({ source, style }: FloatingImageProps) {
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
    <Animated.Image
      source={source}
      style={[style, { transform: [{ translateY: floatAnim }] }]} 
    />
  );
}

export default FloatingImage;
