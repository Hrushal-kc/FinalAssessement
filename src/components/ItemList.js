import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemList = ({
  logo,
  mainText,
  copyPassword,
  url,
  onLongPress,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={onLongPress}
      onPress={onPress}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.maintext}>{mainText}</Text>
          <Text style={styles.copyText}>{copyPassword}</Text>
        </View>
      </View>
      <View style={styles.urlcontainer}>
        <Text style={styles.urlText}>{url}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    borderRadius: 12.6,
    margin: 10,
    elevation: 25,
    shadowColor: 'rgba(0,0,0,0.02)',
    shadowOffset: {width: 1, height: 5},
    shadowRadius: 3,
    shadowColor: 'grey',
  },

  logo: {},

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },

  textContainer: {},

  maintext: {
    height: 24,
    width: 83,
    color: '#0E85FF',
    fontSize: 18,
    fontWeight: '600',
  },

  copyText: {
    height: 15,
    fontSize: 11.4,
    lineHeight: 15,
    color: '#0E85FF',
    lineHeight: 15,
  },

  urlText: {
    textAlign: 'center',
    color: '#3C4857',
    height: 19,
    fontSize: 14.4,
    lineHeight: 19,
    borderRadius: 12.6,
  },

  urlcontainer: {
    backgroundColor: '#FAFAFA',
    padding: 10,
  },
});
