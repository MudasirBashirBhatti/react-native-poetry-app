import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { colors } from '../../utilities/colors';

const Loader = () => {
    // Create an array to hold Animated.Value for each dot
    const animation = useRef([
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
    ]);

    useEffect(() => {
        // Define the animation sequence
        const createAnimation = (index) => {
            return Animated.sequence([
                Animated.timing(animation.current[index], {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animation.current[index], {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                })
            ]);
        };

        // Create a looping animation
        const loopAnimations = () => {
            Animated.loop(
                Animated.stagger(200, [
                    createAnimation(0),
                    createAnimation(1),
                    createAnimation(2),
                ])
            ).start();
        };

        loopAnimations();
    }, []);

    // Render the dots
    return (
        <View style={styles.container}>
            {[0, 1, 2].map((index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.dot,
                        {
                            opacity: animation.current[index],
                            transform: [
                                {
                                    scale: animation.current[index].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.5]
                                    })
                                }
                            ]
                        }
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: colors.secondryClr,
        margin: 5
    }
});

export default Loader;
