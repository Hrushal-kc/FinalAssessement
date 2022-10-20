import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Pressable} from 'react-native';

import UserSite from '../../components/UserSite';

const SelectSite = ({navigation, route}) => {
  const handlePassManagerScreen = () => {
    navigation.navigate('PassManager');
  };

  dataValue = route.params.item;

  const handleEditPress = dataValue => {
    navigation.navigate('EditSite', {dataValue});
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserSite
        headertext="Site Details"
        edittext="Edit"
        logoName="keyboard-backspace"
        onPress={handlePassManagerScreen}
        details={dataValue}
        onEditPress={() => handleEditPress(dataValue)}
        editable={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectSite;
