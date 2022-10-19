import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Pressable} from 'react-native';

import UserSite from '../../components/UserSite';

const SelectSite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserSite headertext="Site Details" edittext="Edit" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectSite;
