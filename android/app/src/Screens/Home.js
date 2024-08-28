import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../Components/ScreensHeader/ScreenHeader'
import { colors } from '../utilities/colors'
import NavigationLink from '../Components/NavigationLink/NavigationLink'
import ContentCompoent from '../Components/ContentComponent/ContentCompoent'

const Home = () => {
    return (
        // <View style={styles.mainContainer}>
        <ContentCompoent contentComponent={<NavigationLink />} />
        // </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr
    }
})