import React from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';

import { colors } from '../../utilities/colors';
import MenuIcon from '../../assets/icons/MenuIcon';
import SearchComponent from '../SearchComponent/SearchComponent';
import FilterIcon from '../../assets/icons/FilterIcon';

const ScreenHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.topBar}>
                    <MenuIcon />
                    <SearchComponent />
                    <FilterIcon />
                </View>
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
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 34
    }
});

export default ScreenHeader;
