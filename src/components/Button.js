import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({text, onPress, disabled}) => {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    height: 44,
    width: 130,
    marginTop: 10,
    marginBottom: 10,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#00B4FF',
    marginTop: 10,
  },
});

export default Button;
