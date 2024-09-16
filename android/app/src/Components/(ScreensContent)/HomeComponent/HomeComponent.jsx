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
import axios from 'axios'
import Loader from '../../(lite)/Loader'

const HomeComponent = () => {
    const dispatch = useDispatch()
    const [array, setarray] = useState(0)
    const [data, setData] = useState([])
    const [uniquePoet, setuniquePoet] = useState([])
    const [uniqueCategory, setuniqueCategory] = useState([])
    const [poetryTerm, setpoetryTerm] = useState('')
    let isBackBtnPressed = useSelector(state => state.tabBackBtnSlice.isBackBtnPressed);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://natural-courage-production.up.railway.app/api/poetry/fetch')
            setData(response.data)
        }
        fetchData()
    }, [])

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

    return (
        <View>
            {
                isBackBtnPressed ? (
                    <View style={styles.container}>
                        <View style={styles.tabContainer}>
                            <Tab tabArray={homeTab} changeTabFunc={getVal} />
                        </View>
                        <View style={styles.contentWrapper}>
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
                        </View>
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
        width: '100%'
    }
})