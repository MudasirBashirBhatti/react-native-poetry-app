import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './android/app/src/Screens/Home';
import About from './android/app/src/Screens/About';
import CustomDrawerContent from './android/app/src/Components/Drawer/customDrawerContent';
import { colors } from './android/app/src/utilities/colors';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <GestureHandlerRootView >
      <NavigationContainer >
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              width: '100%',
              backgroundColor: colors.primaryClr,
            },
            headerShown: false
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />

        </Drawer.Navigator>

      </NavigationContainer>
    </GestureHandlerRootView >
  );
}