import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

export default function App() {
    const textX = useRef(new Animated.Value(-150)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(textX, {
                    toValue: 150,
                    duration: 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(textX, {
                    toValue: -150,
                    duration: 3000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const circleX = useRef(new Animated.Value(200)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(circleX, {
                    toValue: -200,
                    duration: 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(circleX, {
                    toValue: 200,
                    duration: 3000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animated.Text
                style={{
                    marginBottom: 50,
                    fontSize: 18,
                    fontWeight: "bold",
                    transform: [{ translateX: textX }],
                }}
            >
                Chào các bạn đã đến IUH!
            </Animated.Text>

            <Animated.View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "blue",
                    borderRadius: 25,
                    position: "absolute",
                    bottom: 200,
                    transform: [{ translateX: circleX }],
                }}
            />
        </View>
    );
}
