import { StyleSheet, Text, View } from 'react-native'
import Category from '../../(lite)/Category'
import React from 'react'
import { homeTab } from '../../../utilities/json/tabs'
import Tab from '../../tab/Tab'
import { useState } from 'react'
import Poetry from '../../Poetry/Poetry'

const HomeComponent = () => {
    const [array, setarray] = useState([])
    const getVal = (index) => {
        // console.log('e', index)
        if (index === 0) {
            // console.log('first')
            setarray(0)
        } else {
            console.log('second')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <Tab tabArray={homeTab} changeTabFunc={getVal} />
            </View>
            <View style={styles.contentWrapper}>
                <Category onPress={() => console.log('pressed')} />
                <Category onPress={() => console.log('pressed')} />
                <Category onPress={() => console.log('pressed')} />
                <Category onPress={() => console.log('pressed')} />
            </View>
            <Poetry />

        </View>
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    container: {
        rowGap: 32,
    },
    tabContainer: {
        width: '70%',
        margin: 'auto'
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 8,
        rowGap: 12,
        flexWrap: 'wrap',
        width: '100%'
    }
})