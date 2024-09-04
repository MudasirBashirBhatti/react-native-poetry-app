import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/colors'
import ContentCompoent from '../Components/ContentComponent/ContentCompoent'
import HomeComponent from '../Components/(ScreensContent)/HomeComponent/HomeComponent'

const Home = () => {
    return (
        <View style={styles.mainContainer}>
            <ContentCompoent contentComponent={<HomeComponent />} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr,
        color: colors.alert
    }
})