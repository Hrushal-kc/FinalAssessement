import React from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';

import FormInput from './FormInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserSite = ({
  headertext,
  edittext,
  logoName,
  onPress,
  onEditPress,
  details,
  editable,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Icon.Button
          style={styles.image}
          name={logoName}
          size={30}
          onPress={onPress}></Icon.Button>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headertext}>{headertext}</Text>
          <Pressable onPress={onEditPress}>
            <Text style={styles.edittext}>{edittext}</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputContainer}>
          <FormInput
            text="URL"
            boxheight={41}
            value={details.URL}
            editable={editable}
          />
          <FormInput
            text="Site Name"
            boxheight={41}
            value={details.SiteName}
            editable={editable}
          />
          <FormInput
            text="Sector/Folder"
            boxheight={41}
            value={details.Sector}
            editable={editable}
          />
          <FormInput
            text="User Name"
            boxheight={41}
            value={details.UserName}
            editable={editable}
          />
          <FormInput
            text="Site Password"
            boxheight={41}
            value={details.SitePassword}
            editable={editable}
          />
          <FormInput
            text="Notes"
            boxheight={61}
            value={details.Notes}
            editable={editable}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
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
    marginRight: 160,
  },

  edittext: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 28,
  },

  image: {
    backgroundColor: '#0E85FF',
    paddingHorizontal: 10,
  },
  headerTextContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserSite;
