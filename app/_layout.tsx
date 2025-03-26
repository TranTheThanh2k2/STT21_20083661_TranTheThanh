import React, { useEffect, useRef, useState } from "react";
import { View, Animated, SafeAreaView , Text , PanResponder , Dimensions } from "react-native";
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
            Animated.sequence([
                Animated.timing(colorAnim, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim, {
                    toValue: 0,
                    duration: 3000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, []);

    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: ['red', 'blue', 'yellow', 'orange', 'purple' ,'red'],
    });

    const scaleAnim = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5],
    });

    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;

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

    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const scaleSquareAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleSquareAnim, {
                    toValue: 1.5,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleSquareAnim, {
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
                    transform: [{ scale: scaleAnim }], 
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
                    opacity: fadeAnim,
                }}
            />

            <Animated.View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "blue",
                    position: "absolute",
                    bottom: 100,
                    transform: [{ rotate: rotation }],
                }}
            />

            <Animated.View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "purple",
                    position: "absolute",
                    bottom: 50,
                    transform: [{ scale: scaleSquareAnim }],
                }}
            />
        </View>
    );
}



function Cau3() {
    const [circleColor, setCircleColor] = useState("green");
    const initialPosition = useRef({ x: 0, y: 0 }); 
    const pan = useRef(new Animated.ValueXY()).current;

    const screenHeight = Dimensions.get("window").height;
    const rectHeight = 200;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setCircleColor("yellow");
            },
            onPanResponderMove: (_, gestureState) => {
                pan.setValue({ x: gestureState.moveX, y: gestureState.moveY });
            },
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: { x: initialPosition.current.x, y: initialPosition.current.y },
                    useNativeDriver: true,
                }).start();
                setCircleColor("red"); 
            },
        })
    ).current;

    const rectPan = useRef(new Animated.ValueXY()).current;

    const rectPanResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (_, gestureState) => {
                initialPosition.current = { x: gestureState.moveX, y: gestureState.moveY };
            },
            onPanResponderMove: (_, gestureState) => {
                rectPan.setValue({ x: 0, y: gestureState.moveY });
            },
            onPanResponderRelease: (_, gestureState) => {
                const currentY = gestureState.moveY;
                
                if (currentY < screenHeight / 2) {
                    Animated.timing(rectPan, {
                        toValue: { x: 0, y: screenHeight },
                        duration: 500,
                        useNativeDriver: true,
                    }).start(() => {
                        setTimeout(() => {
                            rectPan.setValue({ x: 0, y: screenHeight - rectHeight });
                        }, 1000);
                    });
                } else {
                    Animated.spring(rectPan, {
                        toValue: { x: 0, y: screenHeight - rectHeight },
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>  
            {/* Hình tròn */}
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: circleColor,
                    position: "absolute",
                    top: 100,
                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                }}
            />
            
            {/* Hình chữ nhật */}
            <Animated.View
                {...rectPanResponder.panHandlers}
                style={{
                    width: "100%",
                    height: rectHeight,
                    backgroundColor: 'blue',
                    position: 'absolute',
                    bottom: 0,
                    transform: [{ translateY: rectPan.y }],
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
                <Tab.Screen name="Câu 3" component={Cau3} />
            </Tab.Navigator>
    );
}
