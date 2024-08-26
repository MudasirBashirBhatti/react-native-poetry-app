import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationLink from '../NavigationLink/NavigationLink';
import ShareIcon from '../../assets/icons/ShareIcon';
import StarIcon from '../../assets/icons/StarIcon';
import LockIcon from '../../assets/icons/LockIcon';
import CategoryIcon from '../../assets/icons/CategoryIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import { colors } from '../../utilities/colors';
import CrossIcon from '../../assets/icons/CrossIcon';

const CustomDrawerContent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <Text style={styles.headerText}>Poetry Time</Text>
                <CrossIcon onPress={() => props.navigation.closeDrawer()} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.whiteContainer}>
                    <ScrollView contentContainerStyle={styles.drawerContent}>
                        <NavigationLink text={"Poetry Corner"} urduText={'پوئٹری ٹائم'} icon={<HomeIcon />} onPress={() => props.navigation.navigate('Home')} />
                        <NavigationLink text={"Rate Us"} urduText={"ہماری حوصلہ افزائی کریں"} icon={<StarIcon fill='#FFCC00' />} onPress={() => props.navigation.navigate('Home')} />
                        <NavigationLink text={"Privacy Policy"} urduText={'قوائد و ضوابط'} icon={<LockIcon />} onPress={() => props.navigation.navigate('Home')} />
                        <NavigationLink text={"Categories"} urduText={'کیٹیگری سے تلاش کریں'} icon={<CategoryIcon />} onPress={() => props.navigation.navigate('Home')} />
                        <NavigationLink text={"Favourites"} urduText={'آپ کی پسند'} icon={<HeartIcon fill='red' />} onPress={() => props.navigation.navigate('Home')} />
                        <NavigationLink text={"Share"} urduText={"دوستوں کو بتائیں"} icon={<ShareIcon />} onPress={() => props.navigation.navigate('Home')} />
                    </ScrollView>
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
        height: 124,
        width: '100%',
        borderBottomLeftRadius: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    headerText: {
        fontSize: 24,
        color: colors.primaryClr,
    },
    contentContainer: {
        height: '100%',
        backgroundColor: colors.secondryClr,
        position: 'relative',
        overflow: 'hidden',
    },
    whiteContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingVertical: 52,
        paddingHorizontal: 24,
        borderTopRightRadius: 40,
        backgroundColor: colors.primaryClr,
        overflow: 'scroll'
    },
    drawerContent: {
        gap: 20,
    }
});

export default CustomDrawerContent;
