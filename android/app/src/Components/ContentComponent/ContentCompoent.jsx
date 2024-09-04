import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../utilities/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const ContentCompoent = ({ contentComponent }) => {
    return (
        <SafeAreaView style={styles.contentContainer}>
            <View style={styles.whiteContainer}>
                {contentComponent}
            </View>
        </SafeAreaView>
    )
}

export default ContentCompoent

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.secondryClr,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 32,
        marginTop: 208
    },
    whiteContainer: {
        flex: 1,
        height: '100%',
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: colors.primaryClr,
        borderTopRightRadius: 80,
    }
})