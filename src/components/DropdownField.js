import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const DropdownField = props => {
  return (
    <View>
      <Text style={styles.text}>Select/Folder</Text>
      <SelectList
        text={props.text}
        name={props.name}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        data={props.data}
        setSelected={props.setSelected}
        placeholder="Select Type"
        boxStyles={styles.boxStyle}
        inputStyles={styles.textStyle}
        dropdownStyles={styles.dropdownStyles}
        dropdownItemStyles={styles.dropdownItemStyles}
        dropdownTextStyles={styles.textStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#949CA5',
    fontSize: 18,
    marginTop: 10,
  },

  boxStyle: {
    height: 55,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    fontSize: 18,
    margin: 10,
  },

  dropdownStyles: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
  },
  dropdownItemStyles: {marginHorizontal: 10},

  textStyle: {
    color: 'black',
  },
});

export default DropdownField;
