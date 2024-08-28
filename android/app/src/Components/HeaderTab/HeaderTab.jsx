import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import CategoryIcon from '../../assets/icons/CategoryIcon'
import { colors } from '../../utilities/colors'
import HeartIcon from '../../assets/icons/HeartIcon'
import CopyIcon from '../../assets/icons/CopyIcon'
import { useState } from 'react'

const HeaderTab = () => {
    const [isActive, setisActive] = useState(0)

    const tabs = [
        {
            tabComp: <CategoryIcon fill={colors.primaryClr} />
        },
        {
            tabComp: <HeartIcon fill={colors.primaryClr} />
        },
        {
            tabComp: <CopyIcon fill={colors.primaryClr} />
        },
    ]
    function onPressFunc(index) {
        setisActive(index)
    }
    return (
        <View style={styles.tabContainer}>
            {
                tabs.map((comp, index) =>
                    <Pressable
                        key={index}
                        style={[
                            styles.categoryIcon,
                            isActive === index && { backgroundColor: colors.tabSelectedClr }
                        ]
                        }
                        onPress={() => onPressFunc(index)}
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
        borderRadius: 8
    }
})