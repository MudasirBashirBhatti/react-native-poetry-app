import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './android/app/src/Screens/Home';
import { colors } from './android/app/src/utilities/colors';
import Favourite from './android/app/src/Screens/Favourite';
import CopiedPoetry from './android/app/src/Screens/CopiedPoetry';
import { Text } from 'react-native-svg';
import CustomDrawerContent from './android/app/src/Components/customDrawerContent';
import ScreenHeader from './android/app/src/Components/ScreenHeader';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <GestureHandlerRootView >
      <NavigationContainer >
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={({ route }) => ({
            drawerStyle: {
              width: '100%',
              backgroundColor: colors.primaryClr,
            },
            header: () => <ScreenHeader title={getTitle(route.name)} />

          })}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Favourite" component={Favourite} />
          <Drawer.Screen name="CopiedPoetrys" component={CopiedPoetry} />

        </Drawer.Navigator>

      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

const getTitle = (title) => {
  switch (title) {
    case 'Home':
      return 'Home'
    case 'Favourite':
      return 'Favourites'
    case 'CopiedPoetry':
      return 'Copied Poetry'
  }
}