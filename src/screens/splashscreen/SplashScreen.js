import React from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native';

import logo from '../../../assets/logo.png';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E85FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 204,
    width: 176,
  },
});

export default SplashScreen;
