import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const FormInput = ({text, boxheight, value, editable}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={[styles.inputtext, {height: boxheight}]}
        value={value}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },

  text: {
    fontSize: 18,
    color: '#949CA5',
    height: 24,
    lineHeight: 24,
    marginBottom: 5,
  },
  inputtext: {
    borderWidth: 2,
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    padding: 10,
  },
});

export default FormInput;
