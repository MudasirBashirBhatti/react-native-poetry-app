import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utilities/colors'
import { useState } from 'react'
const Tab = ({ tabArray, changeTabFunc }) => {
    const [tab, settab] = useState(0)
    const detectTab = (index) => {
        settab(index)
        changeTabFunc(index)
    }
    return (
        <View style={styles.tabContainer}>
            {
                tabArray.map((comp, index) =>
                    <Pressable
                        key={index}
                        style={[
                            styles.categoryIcon,
                            tab === index && { backgroundColor: colors.tabSelectedClr }
                        ]
                        }
                        onPress={() => detectTab(index)}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{comp.title}</Text>
                            {comp.icon}
                        </View>
                    </Pressable>
                )
            }
        </View >
    )
}

export default Tab

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