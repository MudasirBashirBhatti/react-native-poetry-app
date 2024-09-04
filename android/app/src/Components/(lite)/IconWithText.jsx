import { StyleSheet, Text, View } from 'react-native'
import HeartIcon from '../../assets/icons/HeartIcon'

const IconWithText = ({ icon, text }) => {
    return (
        <View style={styles.wrapper}>
            {icon || <HeartIcon />}
            <Text>{text || 'text'}</Text>
        </View>
    )
}

export default IconWithText

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})