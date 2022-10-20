import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar1 = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Type kewords to search" />
      <Icon name="arrow-forward" style={styles.icon} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    color: '#0E85FF',
    padding: 10,
  },
});

export default SearchBar1;
