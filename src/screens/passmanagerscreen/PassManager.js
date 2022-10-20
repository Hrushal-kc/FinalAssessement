import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import drawerlogo from '../../../assests/burger_menu.png';
import textpic from '../../../assests/passtext.png';
import searchlogo from '../../../assests/search.png';
import synclogo from '../../../assests/sync_icn.png';
import profilelogo from '../../../assests/profile.png';
import pathLogo from '../../../assests/PathCopy.png';
import ItemList from '../../components/ItemList';
import AddButton from '../../components/AddButton';
import {useDispatch, useSelector} from 'react-redux';
import {deleteSite} from '../../redux/slice';

const PassManager = ({navigation}) => {
  const taskList = useSelector(state => state.slice.value);
  const dispatch = useDispatch();

  const handleSiteNavigation = () => {
    navigation.navigate('AddSite');
  };

  const handleTaskDelete = item => {
    Alert.alert('Confirm', 'Do you want to delete Site', [
      {
        text: 'ok',
        onPress: () => {
          dispatch(deleteSite({id: item.id}));
        },
      },
      {
        text: 'cancel',
      },
    ]);
  };

  const renderItems = ({item}) => {
    return (
      <ItemList
        url={item.URL}
        mainText={item.SiteName}
        copyPassword={item.SitePassword}
        logo={item.image}
        onPress={() => handleTaskDelete(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.imageContainer}>
            <Image source={drawerlogo} style={styles.image} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={textpic} style={styles.logoimage} />
            <Image source={searchlogo} style={styles.logoimage} />
            <Image source={synclogo} style={styles.logoimage} />
            <Image source={profilelogo} style={styles.logoimage} />
          </View>
        </View>
        <View style={styles.pageContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.siteText}>Sites</Text>
            <Text style={styles.socialText}>Social Media</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>07</Text>
            </View>
            <Image source={pathLogo} />
          </View>
          <FlatList
            style={styles.flatList}
            data={taskList}
            renderItem={renderItems}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
      <AddButton onPress={handleSiteNavigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flexDirection: 'column',
  },

  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#0E85FF',
    padding: 15,
  },

  imageContainer: {
    marginRight: 10,
  },

  image: {
    height: 20,
    width: 20,
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  pageContainer: {
    flexDirection: 'column',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },

  siteText: {
    height: 33,
    color: '#3C4857',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 33,
    marginLeft: 20,
    marginRight: 130,
    textDecorationLine: 'underline',
  },

  socialText: {
    height: 27,
    color: '#3C4857',
    lineHeight: 27,
    fontSize: 19.2,
    letterSpacing: 0,
  },

  badge: {
    backgroundColor: '#0E85FF',
    height: 29.6,
    width: 29.6,
    borderWidth: 0.8,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    width: 19,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27,
  },

  flatList: {},
});

export default PassManager;
