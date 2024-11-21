import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../utilities/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContentCompoent from '../Components/ContentCompoent';
import Poetry from '../Components/Poetry';
import HeartIcon from '../assets/icons/HeartIcon';
import Loader from '../Components/Loader';
import { makeFavouriteFunc } from '../utilities/makeFavouriteFunc';

const TodayPoetry = () => {
    const [poetryData, setPoetryData] = useState([]);
    useEffect(() => {

        const sortByCreatedAt = (data) => {
            return [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        };

        const fetchPoetryData = async () => {
            try {
                const data = await AsyncStorage.getItem('poetryData');

                const parsedData = JSON.parse(data);

                const startOfToday = new Date()
                startOfToday.setHours(0, 0, 0, 0)

                const endOfToday = new Date()
                endOfToday.setHours(23, 59, 59, 999)

                const filteredData = parsedData.filter(item => {
                    const createdAt = new Date(item.createdAt);
                    return createdAt >= startOfToday && createdAt <= endOfToday
                }
                )
                setPoetryData(sortByCreatedAt(filteredData))
            } catch (error) {
                console.error("Error fetching poetry data:", error);
            }
        };

        fetchPoetryData();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <ContentCompoent contentComponent={

                poetryData.length > 0 ? (
                    <FlatList
                        data={poetryData}
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
                                onThirdIconPress={() => makeFavouriteFunc(item._id, 'addFavourite')
                                }
                                // fullDate={fullDate}
                                time={new Date(item.createdAt)}
                            />
                        }
                        contentContainerStyle={styles.poetryList}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={styles.empty}>
                        <Text>Check back later for fresh Poetry!</Text>
                    </View>
                )

            }
            />
        </View>
    );
};

export default TodayPoetry;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr,
        justifyContent: 'center',
        alignItems: 'center',
    },
    poetryList: {
        paddingVertical: 20,
        paddingHorizontal: 4,
        gap: 20,
        borderRadius: 50,
        backgroundColor: colors.primaryClr
    },
});
