import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utilities/colors'

const PoetryTextWithAuthor = () => {
    const textArr = {
        poetry: [
            'درد ہو دل میں تو دوا کیجیے',
            'دل ہی جب درد ہو تو کیا کیجیے'
        ],
        poet: 'غالب'
    }
    if (textArr.length === 0) {
        return <Text>Loading...</Text>
    }
    return (
        <View style={styles.wrapper}>
            {
                textArr.poetry.map((item) =>
                    <Text style={styles.text}>{item || ['poetry line 1', 'poetry line 2']}</Text>
                )
            }
            <Text style={styles.poet}>{textArr.poet}</Text>
        </View >
    )
}

export default PoetryTextWithAuthor

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    text: {
        color: colors.primaryClr,
        fontFamily: fonts.urdu,
        fontSize: 20,
        textAlign: 'center'
    },
    poet: {
        color: colors.primaryClr,
        fontFamily: fonts.urdu,
        fontSize: 20,
        textAlign: 'left',
    }

})