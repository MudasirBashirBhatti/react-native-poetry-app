import { StyleSheet, FlatList, Text, View } from 'react-native'
import Tab from './Tab'
import TabWithBackBtn from './TabWithBackBtn'
import Poetry from './Poetry'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsBackBtnPressed } from '../reduxStore/features/tabBackBtnSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Loader from './Loader'
import { addEventListener } from '@react-native-community/netinfo'
import HeartIcon from '../assets/icons/HeartIcon'
import { colors } from '../utilities/colors'
import { makeFavouriteFunc } from '../utilities/makeFavouriteFunc'

const PoetryList = ({ poetryTerm }) => {
    const dispatch = useDispatch()
    const [poetryArr, setPoetryArr] = useState(null);
    const [isConnected, setisConnected] = useState(false);

    const backBtnFunc = () => {
        dispatch(setIsBackBtnPressed(true))
    }

    useEffect(() => {
        console.log('poetryTerm', poetryTerm)

        const unsubscribe = addEventListener(state => {
            setisConnected(state.isInternetReachable)
        })
        const fetchData = async () => {
            try {
                if (isConnected) {
                    const response = await axios(`https://natural-courage-production.up.railway.app/api/poetry/filter?${poetryTerm}`);
                    setPoetryArr(response.data);
                }

                else {
                    const poetryData = await AsyncStorage.getItem('poetryData');
                    const parsedData = JSON.parse(poetryData)
                    console.log('parsedData', parsedData)

                    // provide value not key from poetryTerm { poet: '' || category: '' }
                    const searchedTerm = poetryTerm.split('=')[1]

                    const filterdArray = parsedData.filter(item =>
                        item.poet === searchedTerm || item.category === searchedTerm
                    )
                    setPoetryArr(filterdArray)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        return () => {
            unsubscribe();
        }
    }, [isConnected]);

    return (
        <View style={styles.container}>
            {
                poetryArr === null ? (
                    <Loader />
                )
                    : (
                        <>
                            <TabWithBackBtn backBtnFunc={backBtnFunc} title={`${poetryTerm.split('=')[1]} شاعری`} />
                            <FlatList
                                data={poetryArr}
                                keyExtractor={item => item._id}
                                renderItem={({ item }) =>
                                    <Poetry
                                        poetryId={item._id}
                                        poetryTextArr={item.poetry}
                                        poet={item.poet}
                                        thirdIcon={
                                            <HeartIcon
                                                fill={
                                                    colors.alert
                                                }
                                            />
                                        }
                                        thirdIconText={'Favourite'}
                                        onThirdIconPress={() => makeFavouriteFunc(item._id, 'addFavourite')}
                                    />
                                }
                                contentContainerStyle={styles.poetryList}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                    )
            }
        </View>
    )
}

export default PoetryList


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginHorizontal: 'auto',
        gap: 20,
        justifyContent: 'center',
        height: '100%'
    },
    poetryList: {
        gap: 20,
        width: '95%',
        marginHorizontal: 'auto',
        // paddingBottom: 140
        paddingBottom: 20
    }
})