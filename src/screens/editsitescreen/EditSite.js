import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/Entypo';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {updateSite} from '../../redux/slice';

const EditSite = ({route, navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye');
  const dispatch = useDispatch();
  const data = route.params.dataValue;

  const handleValueSubmit = values => {
    dispatch(updateSite(values));
    navigation.navigate('PassManager');
  };

  const handleSelectDetailsScreen = () => {
    navigation.goBack();
  };

  const loginValidationSchema = yup.object().shape({
    URL: yup
      .string()
      .matches(/(\w).+/, 'Enter a correct URL')
      .required('URL is required'),
    SitePassword: yup
      .string()
      .min(4, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Icon.Button
          style={styles.image}
          name="keyboard-backspace"
          size={30}
          onPress={handleSelectDetailsScreen}></Icon.Button>
        <Text style={styles.headertext}>Edit</Text>
      </View>
      <View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={data}
          onSubmit={handleValueSubmit}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>URL</Text>
                <TextInput
                  name="URL"
                  style={styles.textInput}
                  onChangeText={handleChange('URL')}
                  onBlur={handleBlur('URL')}
                  value={values.URL}
                />
                {errors.URL && (
                  <Text style={styles.errorText}>{errors.URL}</Text>
                )}
                <Text style={styles.text}>SiteName</Text>
                <TextInput
                  name="SiteName"
                  style={styles.textInput}
                  onChangeText={handleChange('SiteName')}
                  onBlur={handleBlur('SiteName')}
                  value={values.SiteName}
                />
                <Text style={styles.text}>Sector/Folder</Text>
                <TextInput
                  name="Sector"
                  style={styles.textInput}
                  onChangeText={handleChange('Sector')}
                  onBlur={handleBlur('Sector')}
                  value={values.Sector}
                />
                <Text style={styles.text}>UserName</Text>
                <TextInput
                  name="UserName"
                  style={styles.textInput}
                  onChangeText={handleChange('UserName')}
                  onBlur={handleBlur('UserName')}
                  value={values.UserName}
                />
                <Text style={styles.text}>SitePassword</Text>
                <View style={styles.textInput}>
                  <TextInput
                    name="SitePassword"
                    style={styles.mpinContainer}
                    onChangeText={handleChange('SitePassword')}
                    onBlur={handleBlur('SitePassword')}
                    value={values.SitePassword}
                    secureTextEntry={secureTextEntry}
                  />
                  <Icon1
                    style={styles.eyeicon}
                    name={icon}
                    size={25}
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);

                      secureTextEntry
                        ? setIcon('eye-with-line')
                        : setIcon('eye');
                    }}
                  />
                </View>
                {errors.SitePassword && (
                  <Text style={styles.errorText}>{errors.SitePassword}</Text>
                )}
                <Text style={styles.text}>Notes</Text>
                <TextInput
                  name="Notes"
                  style={[styles.textInput, {height: 61}]}
                  onChangeText={handleChange('Notes')}
                  onBlur={handleBlur('Notes')}
                  value={values.Notes}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>UPDATE</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#0E85FF',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  buttonText: {
    textAlign: 'center',
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    color: '#FFFFFF',
  },
  headertext: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 28,
    marginRight: 140,
  },
  textInput: {
    borderWidth: 2,
    backgroundColor: '#F5F7FB',
    borderRadius: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    padding: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputContainer: {
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: '#949CA5',
    height: 24,
    lineHeight: 24,
    marginBottom: 5,
  },

  errorText: {
    fontSize: 15,
    color: '#ff0033',
    alignSelf: 'center',
    bottom: 15,
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
  image: {
    backgroundColor: '#0E85FF',
  },
  mpinContainer: {
    borderRadius: 4,
    width: '70%',
    borderColor: '#D7D7D7',
  },
  eyeicon: {
    height: 24,
    width: 30,
    color: 'grey',
    margin: 2,
  },
});

export default EditSite;
