import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors'
import ContentCompoent from '../Components/ContentComponent/ContentCompoent'

const CopiedPoetry = () => {
    return (
        <View style={styles.mainContainer}>
            <ContentCompoent contentComponent={<Text>Copied Component</Text>} />
        </View>
    )
}

export default CopiedPoetry

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr
    }
})