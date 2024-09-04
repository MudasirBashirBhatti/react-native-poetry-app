import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utilities/colors'

const PoetryTextWithAuthor = ({ poetryTextArr = [], poet }) => {

    return (
        <View style={styles.wrapper}>
            {
                poetryTextArr.map((item) =>
                    <Text style={styles.text}>{item || ['poetry line 1', 'poetry line 2']}</Text>
                )
            }
            <Text style={styles.poet}>{poet}</Text>
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