import React from 'react';

import AuthTabNavigation from './src/navigation/AuthTabNaviagtion';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PassManager from './src/screens/passmanagerscreen/PassManager';
import AddSite from './src/screens/addsitescreen/AddSite';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="AuthTabNavigation">
        <Stack.Screen
          name="AuthTabNavigation"
          component={AuthTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PassManager"
          component={PassManager}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddSite"
          component={AddSite}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
