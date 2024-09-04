import { StyleSheet, FlatList, Text, View } from 'react-native'
import Tab from '../tab/Tab'
import TabWithBackBtn from '../(lite)/TabWithBackBtn'
import Poetry from '../Poetry/Poetry'
import { poetryArr } from '../../utilities/json/poetoryArr'
const PoetryList = () => {
    return (
        <View style={styles.container}>
            <TabWithBackBtn />
            <FlatList
                data={poetryArr}
                keyExtractor={item => item.id}
                renderItem={(item) => <Poetry poetryTextArr={item.item.poetry} poet={item.item.poet} />}
                contentContainerStyle={styles.poetryList}
            />
        </View>
    )
}

export default PoetryList


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginHorizontal: 'auto',
        gap: 20
    },
    poetryList: {
        gap: 20,
        width: '95%',
        marginHorizontal: 'auto',
        paddingBottom: 140
    }
})