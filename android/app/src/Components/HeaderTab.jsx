import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utilities/colors';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTabIndex } from '../reduxStore/features/counterSlice';
const HeaderTab = ({ tabArray }) => {
  const navigation = useNavigation();
  const myTab = useSelector(state => state.tab.tabIndex);
  const dispatch = useDispatch();

  const detectTab = index => {
    dispatch(setTabIndex(index));
  };
  useEffect(() => {
    navigation.navigate(tabArray[myTab].screen);
  }, [myTab]);
  return (
    <View style={styles.tabContainer}>
      {tabArray.map((comp, index) => (
        <Pressable
          accessibilityLabel={comp.screen}
          key={index}
          style={[
            styles.categoryIcon,
            myTab === index && { backgroundColor: colors.tabSelectedClr },
          ]}
          onPress={() => detectTab(index)}>
          {comp.tabComp}
        </Pressable>
      ))}
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.tabBgClr,
    padding: 8,
    borderRadius: 8,
  },
  categoryIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderRadius: 8,
  },
});
