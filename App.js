import React from 'react';

import AuthTabNavigation from './src/navigation/AuthTabNaviagtion';
import RNBootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PassManager from './src/screens/passmanagerscreen/PassManager';
import AddSite from './src/screens/addsitescreen/AddSite';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SelectSite from './src/screens/selectsitescreen/SelectSite';
import EditSite from './src/screens/editsitescreen/EditSite';

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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme} onReady={() => RNBootSplash.hide()}>
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
          <Stack.Screen
            name="SelectSite"
            component={SelectSite}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditSite"
            component={EditSite}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <SelectSite />
  );
};

export default App;
