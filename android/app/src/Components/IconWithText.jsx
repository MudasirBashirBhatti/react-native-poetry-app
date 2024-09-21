import { Pressable, StyleSheet, Text, View } from 'react-native'
import HeartIcon from '../assets/icons/HeartIcon'

const IconWithText = ({ icon, text, onPress }) => {
    return (
        <Pressable style={styles.wrapper} onPress={onPress}>
            {icon || <HeartIcon />}
            <Text>{text || 'text'}</Text>
        </Pressable>
    )
}

export default IconWithText

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})