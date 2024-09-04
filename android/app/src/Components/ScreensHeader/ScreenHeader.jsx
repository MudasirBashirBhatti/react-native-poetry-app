import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../utilities/colors';
import MenuIcon from '../../assets/icons/MenuIcon';
import SearchComponent from '../SearchComponent/SearchComponent';
import FilterIcon from '../../assets/icons/FilterIcon';
import HeaderTab from '../HeaderTab/HeaderTab';
import { useNavigation } from '@react-navigation/native';
import { headerTabs } from '../../utilities/json/tabs';

const ScreenHeader = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.topBar}>

                    <MenuIcon onPress={() => navigation.openDrawer()} />
                    <SearchComponent />
                    <FilterIcon />
                </View>

                <HeaderTab tabArray={headerTabs} />

                <Text style={styles.screenName}>{title}</Text>
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
