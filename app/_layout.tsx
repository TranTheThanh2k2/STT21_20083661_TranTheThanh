import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";

export default function App() {
  const translateX = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 3000, 
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.Text style={{ transform: [{ translateX }] }}>
        Chào các bạn đã đến IUH!
      </Animated.Text>
    </View>
  );
}
