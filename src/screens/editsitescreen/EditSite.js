import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Pressable} from 'react-native';

import UserSite from '../../components/UserSite';

const EditSite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserSite headertext="Edit" />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>UPDATE</Text>
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
  },

  button: {
    backgroundColor: '#0E85FF',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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

export default EditSite;
