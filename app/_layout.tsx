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


    // animations cho hình tròn 
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


    // animations cho hình vuông (câu 1c)
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
    });

    const translateY = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -50, 0],
    });

    const rotate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

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

            {/* giao diện cho hình tròn */}
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

            {/* giao diện cho hình vuông  */}
            <Animated.View
                style={{
                    width: 50,
                    height: 50,
                    bottom: 50,
                    backgroundColor: "red",
                    position: "absolute",
                    transform: [{ translateX }, { translateY }, { rotate }],
                }}
            />
        </View>
    );
}
