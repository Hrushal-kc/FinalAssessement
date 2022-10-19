import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const UserInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.textinput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    marginBottom: 70,
  },

  textinput: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 50,
    alignSelf: 'center',
    width: '100%',
    marginBottom: 20,
  },
});

export default UserInput;
