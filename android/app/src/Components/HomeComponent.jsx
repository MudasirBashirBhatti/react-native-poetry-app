import { Alert, ScrollView, StyleSheet, Text, View, BackHandler, useWindowDimensions } from 'react-native'
import Category from './Category'
import React, { useEffect } from 'react'
import { homeTab } from '../utilities/json/tabs'
import Tab from './Tab'
import { useState } from 'react'
import PoetryList from './PoetryList'
import { useSelector } from 'react-redux'
import { setIsBackBtnPressed } from '../reduxStore/features/tabBackBtnSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Loader from './Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addEventListener } from "@react-native-community/netinfo";
import { poetryArr } from '../utilities/json/poetoryArr'

const HomeComponent = () => {
    const dispatch = useDispatch()
    const [array, setarray] = useState(0)
    const [data, setData] = useState([])
    const [uniquePoet, setuniquePoet] = useState([])
    const [uniqueCategory, setuniqueCategory] = useState([])
    const [poetryTerm, setpoetryTerm] = useState('')
    const [isConnected, setisConnected] = useState(false);
    let isBackBtnPressed = useSelector(state => state.tabBackBtnSlice.isBackBtnPressed);

    useEffect(() => {
        const unsubscribe = addEventListener(state => {
            setisConnected(state.isInternetReachable)
        })
        // unsubscribe();
        const fetchData = async () => {
            if (isConnected) {
                // connected to internet
                const currentDate = new Date().toISOString().split('T')[0]
                const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDate')

                // if both dates not matched
                if (currentDate !== lastFetchedDate) {
                    try {
                        const response = await axios.get('https://natural-courage-production.up.railway.app/api/poetry/fetch');
                        setData(response.data);
                        await AsyncStorage.setItem('poetryData', JSON.stringify(response.data))
                        await AsyncStorage.setItem('lastFetchedDate', currentDate)
                    } catch (error) {
                        const asyncData = await AsyncStorage.getItem('poetryData')
                        if (asyncData) {
                            setData(JSON.parse(asyncData))
                        } else {
                            setData(poetryArr)
                        }
                    }

                } else {
                    const asyncData = await AsyncStorage.getItem('poetryData')
                    if (asyncData) {
                        setData(JSON.parse(asyncData))
                    }
                    else {
                        setData(poetryArr)
                    }
                }
            }

            else {
                // not connected to internet
                const storedData = await AsyncStorage.getItem('poetryData')
                if (storedData) {
                    setData(JSON.parse(storedData))
                    console.log('data from async storage');
                } else {
                    setData(poetryArr)
                }
            }
        };
        fetchData();

        return () => {
            unsubscribe()
        }
    }, [isConnected]);

    useEffect(() => {
        const poets = data.map((item) => item.poet)
        const category = data.map((item) => item.category);

        setuniquePoet([... new Set(poets)])
        setuniqueCategory([... new Set(category)])
    }, [data])

    // indexing check function for topic + poet tab
    const getVal = (index) => {
        if (index === 0) {
            setarray(0)

        } else {
            setarray(1)
        }
    }

    // function to show category wise as well as poet wise poetry
    const specificPoetryFunc = (value, type) => {
        dispatch(setIsBackBtnPressed(false))
        if (type === 'category') {
            setpoetryTerm(`category=${value}`)
        } else if (type === 'poet') {
            setpoetryTerm(`poet=${value}`)
        }
    }


    // back button functionality
    useEffect(() => {
        const backAction = () => {
            if (!isBackBtnPressed) {
                dispatch(setIsBackBtnPressed(true))
            } else {
                Alert.alert('', 'Are you sure you wanted to close the App?', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'YES', onPress: () => BackHandler.exitApp() },
                ]);
            }
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [isBackBtnPressed]);

    return (
        <View>
            {
                isBackBtnPressed ? (
                    <View style={styles.container}>
                        <View style={styles.tabContainer}>
                            <Tab tabArray={homeTab} changeTabFunc={getVal} />
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentWrapper}>
                            {
                                uniqueCategory.length === 0 || uniquePoet.length === 0 ?
                                    (<Loader />)
                                    :
                                    (
                                        array === 0
                                            ? uniqueCategory.map((category, index) => (
                                                <Category key={index} title={category} onPress={() => specificPoetryFunc(category, 'category')} />
                                            ))
                                            : uniquePoet.map((poet, index) => (
                                                <Category key={index} title={poet} onPress={() => specificPoetryFunc(poet, 'poet')} />
                                            ))
                                    )
                            }
                        </ScrollView>
                    </View>
                ) : (
                    <PoetryList poetryTerm={poetryTerm} />
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
        width: '100%',
        paddingBottom: 200
    }
})