import React, {useRef} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {filterSite} from '../redux/slice';

const SearchBar1 = ({onChangeText, value}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type kewords to search"
        onChangeText={value => dispatch(filterSite(value))}
        value={value}
      />
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
  },
  icon: {
    color: '#0E85FF',
    padding: 10,
  },
});

export default SearchBar1;
