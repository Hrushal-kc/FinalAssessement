import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';

import FormInput from './FormInput';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserSite = ({headertext, edittext, logoName, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Icon.Button
          style={styles.image}
          name={logoName}
          size={30}
          onPress={onPress}></Icon.Button>
        <Text style={styles.headertext}>{headertext}</Text>
        <Pressable>
          <Text style={styles.edittext}>{edittext}</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <FormInput text="URL" boxheight={41} />
        <FormInput text="Site Name" boxheight={41} />
        <FormInput text="Sector/Folder" boxheight={41} />
        <FormInput text="User Name" boxheight={41} />
        <FormInput text="Site Password" boxheight={41} />
        <FormInput text="Notes" boxheight={61} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    margin: 20,
  },

  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#0E85FF',
    padding: 10,
  },

  headertext: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 28,
    marginRight: 140,
  },

  edittext: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 28,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    backgroundColor: '#0E85FF',
    paddingHorizontal: 10,
  },
});

export default UserSite;