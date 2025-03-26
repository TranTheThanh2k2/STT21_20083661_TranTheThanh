import React, { useEffect, useRef, useState } from "react";
import { View, Animated, SafeAreaView , Text , PanResponder  } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Cau1() {
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
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

            {/* giao diện cho hình vuông */}
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
        </SafeAreaView>
    );
}

function Cau2() {
    const colorAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(colorAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false, 
            })
        ).start();
    }, []);

    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1], 
        outputRange: ['red', 'blue', 'yellow', 'orange', 'purple', 'red'], 
    });

    const moveAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(moveAnim, {
                    toValue: 100,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(moveAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animated.View
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: backgroundColor, 
                    marginBottom: 30,
                }}
            />
            <Animated.View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "green",
                    position: "absolute",
                    bottom: 150,
                    transform: [{ translateY: moveAnim }],
                }}
            />
            <Animated.View
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: "pink",
                    position: "absolute",
                    bottom: 50,
                    opacity: fadeAnim, 
                }}
            />
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function App() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Câu 1" component={Cau1} />
                <Tab.Screen name="Câu 2" component={Cau2} />
                {/* <Tab.Screen name="Câu 3" component={Cau3} /> */}
            </Tab.Navigator>
    );
}
