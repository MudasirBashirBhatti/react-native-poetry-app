import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import SearchIcon from '../../assets/icons/SearchIcon'
import { colors } from '../../utilities/colors'

const SearchComponent = ({ placeholder }) => {
    return (
        <View style={styles.SearchBarContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder || 'search...'} placeholderTextColor={colors.secondryClr}
                selectionColor={colors.secondryClr}
            />
            <View style={styles.searchIcon}>
                <SearchIcon />
            </View>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    SearchBarContainer: {
        backgroundColor: colors.primaryClr,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    searchIcon: {
        paddingLeft: 8
    },
    textInput: {
        flex: 1,
        padding: 0,
        paddingRight: 8,
        borderRightWidth: 2,
        borderRightColor: colors.secondryClr,
    }

})