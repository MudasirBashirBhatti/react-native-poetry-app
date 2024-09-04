import React, { useState, useEffect } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utilities/colors';

const Category = ({ title, onPress }) => {
    const [categoryWidth, setCategoryWidth] = useState('98');

    useEffect(() => {
        const handleResize = () => {
            const { width } = Dimensions.get('screen');
            if (width < 360) {
                setCategoryWidth('48%');
            } else if (width > 360) {
                setCategoryWidth('31%');
            } else {
                // or 98
                setCategoryWidth('31%')
            }
        };

        // Set initial width
        handleResize();

        // Add event listener for screen resize
        const subscription = Dimensions.addEventListener('change', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            subscription?.remove();
        };
    }, []);

    return (
        <Pressable style={[styles.container, { width: categoryWidth }]} onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{title || 'خوشی'}</Text>
            </View>
        </Pressable>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.primaryClr,
        borderRadius: 8,
        elevation: 3,
        // width will be applied dynamically
    },
    innerContainer: {
        backgroundColor: colors.secondryClr,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 4,
        borderColor: colors.primaryClr,
        borderWidth: 3,
    },
    text: {
        paddingVertical: 0,
        paddingHorizontal: 20,
        color: colors.primaryClr,
        fontSize: 16,
        fontFamily: fonts.urdu,
    }
});
