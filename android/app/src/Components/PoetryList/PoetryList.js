import { StyleSheet, FlatList, Text, View } from 'react-native'
import Tab from '../tab/Tab'
import TabWithBackBtn from '../(lite)/TabWithBackBtn'
import Poetry from '../Poetry/Poetry'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsBackBtnPressed } from '../../reduxStore/features/tabBackBtnSlice'
import axios from 'axios'
import Loader from '../(lite)/Loader'
const PoetryList = ({ poetryTerm }) => {
    const dispatch = useDispatch()
    const [poetryArr, setPoetryArr] = useState(null);
    const backBtnFunc = () => {
        dispatch(setIsBackBtnPressed(true))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`https://natural-courage-production.up.railway.app/api/poetry/filter?${poetryTerm}`);
                setPoetryArr(response.data);
                console.log(`https://natural-courage-production.up.railway.app/api/poetry/filter?${poetryTerm}`)


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(poetryTerm)
    console.log(poetryArr)
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