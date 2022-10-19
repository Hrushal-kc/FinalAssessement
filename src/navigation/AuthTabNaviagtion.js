import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignUp from '../screens/signupScreen/SignUpScreen';
import SigninScreen from '../screens/signinscreen/SigninScreen';
import {Image, StyleSheet, View, SafeAreaView} from 'react-native';
import logo from '../../assests/screenlogo.png';
import LinearGradient from 'react-native-linear-gradient';
import AddSite from '../screens/addsitescreen/AddSite';

const Tab = createMaterialTopTabNavigator();

const AuthTabNavigation = () => {
  return (
    <LinearGradient
      colors={['#20BBFF', '#0E85FF']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageContainer}>
          <Image source={logo} />
        </View>
        <Tab.Navigator
          initialRouteName="Sign IN"
          screenOptions={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarLabelStyle: {
              fontSize: 20,
              lineHeight: 27,
              width: 77,
              height: 27,
            },
            tabBarStyle: {backgroundColor: 'transparent'},
            tabBarIndicatorStyle: {
              backgroundColor: '#FFA222',
              width: 81,
              height: 4,
              marginLeft: 60,
            },
          }}>
          <Tab.Screen name="Sign IN" component={SigninScreen} />
          <Tab.Screen name="Sign Up" component={SignUp} />
        </Tab.Navigator>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthTabNavigation;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  imageContainer: {
    alignItems: 'center',
    padding: 20,
  },
});
