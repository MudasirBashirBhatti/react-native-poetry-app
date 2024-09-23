import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../utilities/colors'
import ContentCompoent from '../Components/ContentCompoent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import Poetry from '../Components/Poetry'
import TodayIcon from '../assets/icons/TodayIcon'
import RemoveFavouriteIcon from '../assets/icons/RemoveFavouriteIcon'
import { makeFavouriteFunc } from '../utilities/makeFavouriteFunc'

const Favourite = () => {
    const [poetryData, setpoetryData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const fetchFavouritePoetry = await AsyncStorage.getItem('favouritePoetry')
            const parsedData = JSON.parse(fetchFavouritePoetry)
            setpoetryData(parsedData)
        }
        fetchData()
    }, [poetryData])
    return (
        <View style={styles.mainContainer}>
            <ContentCompoent
                contentComponent={
                    <FlatList
                        data={poetryData}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) =>
                            <Poetry
                                poetryId={item._id}
                                poetryTextArr={item.poetry}
                                poet={item.poet}

                                thirdIcon={<RemoveFavouriteIcon fill={colors.alert} />}
                                thirdIconText={'Remove'}
                                onThirdIconPress={() => makeFavouriteFunc(item._id, 'removeFavourite')}
                                time={new Date(item.createdAt)}
                            />
                        }
                        contentContainerStyle={styles.poetryList}
                        showsVerticalScrollIndicator={false}
                    />
                } />
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr,
    },
    poetryList: {
        paddingVertical: 20,
        paddingHorizontal: 4,
        gap: 20,
    }
})