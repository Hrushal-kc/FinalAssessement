import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Pressable} from 'react-native';

import UserSite from '../../components/UserSite';

const AddSite = ({navigation}) => {
  const handlePassManagerScreen = () => {
    navigation.navigate('PassManager');
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserSite
        headertext="Add Site"
        logoName="keyboard-backspace"
        onPress={handlePassManagerScreen}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>RESET</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SAVE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#0E85FF',
    height: 55,
    width: 194,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    color: '#FFFFFF',
  },
});

export default AddSite;
