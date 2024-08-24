// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../../utilities/colors';
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.mainDrawer}>
            <View style={styles.drawerHeader} ></View>
            <View style={styles.bottomBlueArea} >
                <View style={styles.drawerContent}>
                    {/* <DrawerItemList {...props} /> */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    mainDrawer: {
        width: '100% !important',
    },
    drawerHeader: {
        backgroundColor: colors.secondryClr,
        height: 124,
        width: '100%',
        borderBottomLeftRadius: 40,
    },
    bottomBlueArea: {
        backgroundColor: colors.secondryClr,
        height: 124,
        width: '100%',
        position: 'relative'
    },
    drawerContent: {
        position: 'absolute',
        height: 500,
        width: '100%',
        borderTopRightRadius: 40,
        top: 0,
        left: 0,
        backgroundColor: colors.primaryClr
    },
    logoutButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ff6f61',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomDrawerContent;
