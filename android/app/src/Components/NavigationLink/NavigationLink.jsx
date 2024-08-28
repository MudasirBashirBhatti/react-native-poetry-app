import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utilities/colors'

const NavigationLink = ({ text, urduText, icon, onPress }) => {
    return (

        <Pressable android_ripple={{ color: colors.secondryClr, radius: 40, foreground: false, borderless: true }} style={styles.navigationBtnContainer} onPress={onPress} >

            <View style={styles.leftSide}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.urduText}>{urduText}</Text>
        </Pressable >



    )
}

export default NavigationLink

const styles = StyleSheet.create({
    navigationBtnContainer: {
        padding: 16,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryClr,
        borderWidth: 1,
        borderColor: colors.secondryClr,
        color: colors.secondryClr
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    text: {
        color: colors.secondryClr
    },
    urduText: {
        color: colors.secondryClr,
        fontFamily: fonts.urdu
    }
})