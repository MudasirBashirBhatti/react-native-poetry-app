import React from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';

import { colors } from '../../utilities/colors';
import MenuIcon from '../../assets/icons/MenuIcon';
import SearchComponent from '../SearchComponent/SearchComponent';
import FilterIcon from '../../assets/icons/FilterIcon';
import HeaderTab from '../HeaderTab/HeaderTab';

const ScreenHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.topBar}>
                    <MenuIcon />
                    <SearchComponent />
                    <FilterIcon />
                </View>

                <HeaderTab />

                <Text style={styles.screenName}>Home Tab</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.secondryClr,
        height: 208,
        width: '100%',
        borderBottomLeftRadius: 80,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 34
    },
    screenName: {
        color: colors.primaryClr,
        textAlign: 'center',
        fontSize: 18
    }
});

export default ScreenHeader;
