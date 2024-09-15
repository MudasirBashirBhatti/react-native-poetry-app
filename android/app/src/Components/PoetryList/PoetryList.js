import { StyleSheet, FlatList, Text, View } from 'react-native'
import Tab from '../tab/Tab'
import TabWithBackBtn from '../(lite)/TabWithBackBtn'
import Poetry from '../Poetry/Poetry'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsBackBtnPressed } from '../../reduxStore/features/tabBackBtnSlice'
import axios from 'axios'
import Loader from '../(lite)/Loader'
const loadingImage = require('../../assets/load-31_128.gif')
const PoetryList = () => {
    const dispatch = useDispatch()
    const [poetryArr, setPoetryArr] = useState(null);
    const backBtnFunc = () => {
        dispatch(setIsBackBtnPressed(true))
        console.log('back button pressed')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios('https://natural-courage-production.up.railway.app/api/poetry/fetch');
                setPoetryArr(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            {
                poetryArr === null ? (
                    <Loader />
                )
                    : (
                        <>
                            <TabWithBackBtn backBtnFunc={backBtnFunc} />
                            <FlatList
                                data={poetryArr}
                                keyExtractor={item => item._id}
                                renderItem={({ item }) => <Poetry poetryTextArr={item.poetry} poet={item.poet} />}
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