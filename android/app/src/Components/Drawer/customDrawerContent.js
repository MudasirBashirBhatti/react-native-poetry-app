// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.mainDrawer}>
            <View style={styles.drawerHeader}>
                <Text style={styles.headerText}>Custom Drawer Header</Text>
            </View>
            <DrawerItemList {...props} />
            <TouchableOpacity>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M16.94 3.1C15.13 3.1 13.51 3.98 12.5 5.33C11.49 3.98 9.87 3.1 8.06 3.1C4.99 3.1 2.5 5.6 2.5 8.69C2.5 9.88 2.69 10.98 3.02 12C4.6 17 9.47 19.99 11.88 20.81C12.22 20.93 12.78 20.93 13.12 20.81C15.53 19.99 20.4 17 21.98 12C22.31 10.98 22.5 9.88 22.5 8.69C22.5 5.6 20.01 3.1 16.94 3.1Z" fill="red" />
                </svg> */}
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => alert('Logout pressed')}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    mainDrawer: {
        width: '100% !important',
    },
    drawerHeader: {
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
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
