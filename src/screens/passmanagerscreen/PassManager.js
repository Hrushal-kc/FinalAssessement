import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import drawerlogo from '../../../assests/burger_menu.png';
import textpic from '../../../assests/passtext.png';
import searchlogo from '../../../assests/search.png';
import profilelogo from '../../../assests/profile.png';
import pathLogo from '../../../assests/PathCopy.png';
import ItemList from '../../components/ItemList';
import AddButton from '../../components/AddButton';
import {useDispatch, useSelector} from 'react-redux';
import {deleteSite, filterDropDown} from '../../redux/slice';
import SearchBar1 from '../../components/SearchBar';
import {DataSyncField} from '../../components/dataSyncField';

const PassManager = ({navigation}) => {
  const [showSearchBar, setShowSeacrhBar] = useState(false);
  const taskList = useSelector(state => state.slice.value);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState('All');
  const sitesFolder = ['All', 'Social Media', 'Shopping Sites'];

  const setDropdown = () => {
    setVisible(!visible);
  };
  const handleFolders = folder => {
    setItem(folder);
    dispatch(filterDropDown(folder));
    setVisible(false);
  };
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownStyles}>
          {sitesFolder.map(folder => (
            <TouchableOpacity
              onPress={() => {
                handleFolders(folder);
              }}
              key={folder}>
              <Text style={styles.textStyle}>{folder}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  const handleShowSearchBar = () => {
    setShowSeacrhBar(!showSearchBar);
  };

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

  const handleSelectSiteNavigation = item => {
    navigation.navigate('SelectSite', item);
  };

  const renderItems = ({item}) => {
    return (
      <ItemList
        url={item.URL}
        mainText={item.SiteName}
        copyPassword={item.SitePassword}
        logo={item.image}
        onLongPress={() => handleTaskDelete(item)}
        onPress={() => handleSelectSiteNavigation({item})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar color="#085AAD" />
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.imageContainer}>
            <Image source={drawerlogo} style={styles.image} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={textpic} style={styles.logoimage} />
            <Pressable onPress={handleShowSearchBar}>
              <Image source={searchlogo} style={styles.logoimage} />
            </Pressable>
            <DataSyncField />
            <Image source={profilelogo} style={styles.logoimage} />
          </View>
        </View>
        <View style={styles.pageContainer}>
          {showSearchBar ? (
            <SearchBar1 />
          ) : (
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.siteText}>Sites</Text>
                <View style={styles.bottomLine} />
              </View>
              <View style={styles.dropdownContainer}>
                <Text style={styles.socialText}>{item}</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{taskList.length}</Text>
                </View>
                <TouchableOpacity onPress={setDropdown}>
                  <Image source={pathLogo} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {renderDropdown()}
          <View style={styles.flatList}>
            <FlatList
              data={taskList}
              renderItem={renderItems}
              keyExtractor={item => item.id}></FlatList>
          </View>
        </View>
      </View>
      <AddButton onPress={handleSiteNavigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    width: '100%',
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
    alignItems: 'center',
  },

  pageContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  },

  bottomLine: {
    borderBottomColor: '#FFA136',
    borderBottomWidth: 3,
    width: 30,
    height: 3.2,
    borderRadius: 1.6,
    marginLeft: 20,
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
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27,
    alignSelf: 'center',
  },

  dropdownStyles: {
    width: '50%',
    alignSelf: 'flex-end',
    backgroundColor: '#F5F7FB',
    borderWidth: 0.3,
    borderColor: '#D7D7D7',
    borderRadius: 5,
  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default PassManager;
