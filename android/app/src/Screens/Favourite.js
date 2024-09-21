import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors'
import ContentCompoent from '../Components/ContentCompoent'

const Favourite = () => {
    return (
        <View style={styles.mainContainer}>
            <ContentCompoent contentComponent={<Text>FAvourite</Text>} />
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr
    }
})