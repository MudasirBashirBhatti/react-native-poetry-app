import { StyleSheet, Text, View } from 'react-native'
import Category from '../../(lite)/Category'
import React, { useEffect } from 'react'
import { homeTab } from '../../../utilities/json/tabs'
import Tab from '../../tab/Tab'
import { useState } from 'react'
import PoetryList from '../../PoetryList/PoetryList'
import { useSelector } from 'react-redux'
import { setIsBackBtnPressed } from '../../../reduxStore/features/tabBackBtnSlice'
import { useDispatch } from 'react-redux'
import Loader from '../../(lite)/Loader'

const HomeComponent = () => {
    const dispatch = useDispatch()
    const [array, setarray] = useState([])
    let isBackBtnPressed = useSelector(state => state.tabBackBtnSlice.isBackBtnPressed);
    console.log('isBackBtnPressed', isBackBtnPressed)
    const getVal = (index) => {
        // console.log('e', index)
        if (index === 0) {
            setarray(0)
        } else {
            setarray(1)
        }
    }
    return (
        <View>
            {
                isBackBtnPressed ? (
                    <View style={styles.container}>
                        <View style={styles.tabContainer}>
                            <Tab tabArray={homeTab} changeTabFunc={getVal} />
                        </View>
                        <View style={styles.contentWrapper}>
                            <Category onPress={() => dispatch(setIsBackBtnPressed(false))} />
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