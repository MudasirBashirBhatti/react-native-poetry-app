import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import { colors } from '../../utilities/colors';

const ScreenHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: colors.secondryClr,
        height: 208,
        width: '100%',
        borderBottomLeftRadius: 80,
        paddingHorizontal: 24,
        paddingVertical: 12,
        position: 'relative'
    },
});

export default ScreenHeader;
