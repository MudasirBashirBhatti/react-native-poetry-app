import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import CategoryIcon from '../../assets/icons/CategoryIcon'
import { colors } from '../../utilities/colors'
import HeartIcon from '../../assets/icons/HeartIcon'
import CopyIcon from '../../assets/icons/CopyIcon'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTabIndex } from '../../reduxStore/features/counterSlice'

const HeaderTab = () => {

    const navigation = useNavigation()
    const myTab = useSelector((state) => state.tab.tabIndex)
    console.log(myTab)
    const dispatch = useDispatch()

    const tabs = [
        {
            tabComp: <CategoryIcon fill={colors.primaryClr} />,
            screen: 'Home',
        },
        {
            tabComp: <HeartIcon fill={colors.primaryClr} />,
            screen: 'Favourite',
        },
        {
            tabComp: <CopyIcon fill={colors.primaryClr} />,
            screen: 'CopiedPoetry',
        },
    ]

    const detectTab = (index) => {
        dispatch(setTabIndex(index))
    }
    useEffect(() => {
        navigation.navigate(tabs[myTab].screen)
    }, [myTab])
    return (
        <View style={styles.tabContainer}>
            {
                tabs.map((comp, index) =>
                    <Pressable
                        key={index}
                        style={[
                            styles.categoryIcon,
                            myTab === index && { backgroundColor: colors.tabSelectedClr }
                        ]
                        }
                        onPress={() => detectTab(index)}
                    >
                        {comp.tabComp}
                    </Pressable>
                )
            }
        </View >
    )
}

export default HeaderTab

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.tabBgClr,
        padding: 8,
        borderRadius: 8
    },
    categoryIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 36,
        borderRadius: 8,
    }
})