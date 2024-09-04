import { StyleSheet, Text, View } from 'react-native'
import Category from '../../(lite)/Category'
import React from 'react'
import { homeTab } from '../../../utilities/json/tabs'
import Tab from '../../tab/Tab'
import { useState } from 'react'
import PoetryList from '../../PoetryList/PoetryList'

const HomeComponent = () => {
    const [array, setarray] = useState([])
    const [isListVisible, setisListVisible] = useState(false)
    const getVal = (index) => {
        // console.log('e', index)
        if (index === 0) {
            // console.log('first')
            setarray(0)
        } else {
            console.log('second')
        }
    }

    const onPressNavigate = () => {
        setisListVisible(true)
    }
    return (
        <View>
            {
                !isListVisible ? (
                    <View style={styles.container}>
                        <View style={styles.tabContainer}>
                            <Tab tabArray={homeTab} changeTabFunc={getVal} />
                        </View>
                        <View style={styles.contentWrapper}>
                            <Category onPress={onPressNavigate} />
                        </View>
                    </View>
                ) : (
                    <PoetryList />
                )
            }

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