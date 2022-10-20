import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemList = ({
  logo,
  mainText,
  copyPassword,
  url,
  onLongPress,
  onPress,
}) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = password => {
    Clipboard.setString(password);
    alert(password);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={onLongPress}
      onPress={onPress}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.maintext}>{mainText}</Text>
          <TouchableOpacity onPress={() => copyToClipboard(copyPassword)}>
            <View style={styles.copyContainer}>
              <Icon name="content-copy" style={styles.copyIcon} />
              <Text style={styles.copyText}>Copy Password</Text>
            </View>
          </TouchableOpacity>
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
    // marginTop: 60,
    // borderRadius: 12.6,
    // margin: 10,
    // elevation: 25,
    // shadowColor: 'rgba(0,0,0,0.02)',
    // shadowOffset: {width: 1, height: 5},
    // shadowRadius: 3,
    // shadowColor: 'grey',
    height: 104,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 40,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },

  textContainer: {},

  maintext: {
    height: 24,
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
    alignSelf: 'center',
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

  copyContainer: {
    flexDirection: 'row',
  },

  copyIcon: {
    color: '#0E85FF',
    margin: 2,
  },
});
