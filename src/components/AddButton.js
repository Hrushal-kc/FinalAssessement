import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const AddButton = ({onPress}) => {
  return (
    <View style={styles.conatiner}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },

  button: {
    borderWidth: 1,
    borderColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    position: 'absolute',
    bottom: 100,
    right: 20,
    height: 65,
    backgroundColor: '#0E85FF',
    borderRadius: 100,
    paddingBottom: 15,
  },

  text: {
    fontSize: 50,
    color: '#FFFFFF',
  },
});

export default AddButton;
