import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utilities/colors'
import IconWithText from '../(lite)/IconWithText'
import CopyIcon from '../../assets/icons/CopyIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import ShareIcon from '../../assets/icons/ShareIcon'
import PoetryTextWithAuthor from '../(lite)/PoetryTextWithAuthor'

const Poetry = ({ poetryTextArr, poet }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.poetryWrapper}>
                <PoetryTextWithAuthor poetryTextArr={poetryTextArr} poet={poet} />
            </View>
            <View style={styles.actionsWrapper}>
                <IconWithText icon={<CopyIcon fill={colors.secondryClr} />} text={'Copy'} />
                <IconWithText icon={<CopyIcon fill={'green'} />} text={'Whatsapp'} />
                <IconWithText icon={<HeartIcon fill={colors.alert} />} text={'Favourite'} />
                <IconWithText icon={<ShareIcon fill={colors.secondryClr} />} text={'Copy'} />
            </View>
        </View>
    )
}

export default Poetry

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.primaryClr,
        borderRadius: 12,
        elevation: 3,
        gap: 12
    },
    poetryWrapper: {
        backgroundColor: colors.secondryClr,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
        borderColor: colors.primaryClr,
        borderWidth: 3,
    },
    actionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})