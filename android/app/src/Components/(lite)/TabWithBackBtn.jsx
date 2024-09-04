import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utilities/colors'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'
const TabWithBackBtn = ({ title, backBtnFunc }) => {
    return (
        <View style={styles.tabContainer}>
            <Pressable
                style={[
                    styles.categoryIcon,
                ]
                }
                onPress={backBtnFunc}
            >
                {/* <View style={styles.titleContainer}> */}
                <BackArrowIcon />
                {/* </View> */}
            </Pressable>
            <View
                style={[
                    styles.categoryIcon,
                    { backgroundColor: colors.tabSelectedClr }
                ]}
                onPress={backBtnFunc}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title || 'title'}</Text>
                </View>
            </View>

        </View >
    )
}

export default TabWithBackBtn

const styles = StyleSheet.create({
    tabContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.tabBgClr,
        padding: 8,
        borderRadius: 8,
        margin: 'auto'
    },
    categoryIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 8,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8
    },
    title: {
        color: colors.primaryClr,
        fontFamily: fonts.urdu,
        fontSize: 18,
    }
})