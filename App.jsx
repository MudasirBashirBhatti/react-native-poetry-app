import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './android/app/src/Screens/Home';
import PrivacyPolicy from './android/app/src/Screens/PrivacyPolicy';
import { colors } from './android/app/src/utilities/colors';
import Favourite from './android/app/src/Screens/Favourite';
import TodayPoetry from './android/app/src/Screens/TodayPoetry';
import { Text } from 'react-native-svg';
import CustomDrawerContent from './android/app/src/Components/customDrawerContent';
import ScreenHeader from './android/app/src/Components/ScreenHeader';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator()

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])

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
          <Drawer.Screen name="TodayPoetry" component={TodayPoetry} />
          <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolicy} />

        </Drawer.Navigator>

      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

const getTitle = (title) => {
  switch (title) {
    case 'Home':
      return "پہلا صفحہ"
    case 'Favourite':
      return 'آپ کی پسند'
    case 'TodayPoetry':
      return 'آج کی شاعری'
    case 'PrivacyPolicy':
      return 'قوائد و ضوابط'
  }
}