import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import Button from '../../components/Button';
import fingerPrintIcon from '../../../assests/fingerprinticon.png';
import {Formik} from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {signINUser} from '../../redux/auth';

const SigninScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye');

  // const handlePassManagerScreen = values => {
  //   console.log(values);
  //   dispatch(signINUser(values));
  //   // Toast.show('Congrtats!!! Success \n Signin to access the vault');
  //   // navigation.navigate('PassManager');
  // };

  const loginValidationSchema = yup.object().shape({
    MobileNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid Mobile Number')
      .required('Mobile Number is required'),
    mPin: yup
      .string()
      .min(4, ({min}) => `mPin must be at least ${min} characters`)
      .required('mPin is required'),
  });

  const handlePassManagerScreen = values => {
    let data = {
      MobileNumber: values.MobileNumber,
      mPin: values.mPin,
    };
    // dispatch(signINUser(data));
    // console.log(data);
    navigation.navigate('PassManager');
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            MobileNumber: '',
            mPin: '',
            confirmmPin: '',
          }}
          onSubmit={values => {
            dispatch(() => handlePassManagerScreen(values));
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <TextInput
                name="MobileNumber"
                placeholder="Mobile Number"
                style={styles.textinput}
                onChangeText={handleChange('MobileNumber')}
                onBlur={handleBlur('MobileNumber')}
                value={values.MobileNumber}
                keyboardType="decimal-pad"
              />

              {errors.MobileNumber && (
                <Text style={styles.errorText}>{errors.MobileNumber}</Text>
              )}
              <View style={styles.textinput}>
                <TextInput
                  name="mPin"
                  placeholder="mPin"
                  style={styles.mpinContainer}
                  onChangeText={handleChange('mPin')}
                  onBlur={handleBlur('mPin')}
                  value={values.mPin}
                  keyboardType="decimal-pad"
                  secureTextEntry={secureTextEntry}
                />
                <Icon
                  style={styles.eyeicon}
                  name={icon}
                  size={25}
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);

                    secureTextEntry ? setIcon('eye-with-line') : setIcon('eye');
                  }}
                />
              </View>
              {errors.mPin && (
                <Text style={styles.errorText}>{errors.mPin}</Text>
              )}
              <Button
                text="Sign IN"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>

        <Text style={styles.text}>Forgot Your Password?</Text>
        <Image source={fingerPrintIcon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.forgotText}>OR</Text>
          <Text style={styles.useText}>Use your fingerprint to login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'trasnparent',
    marginTop: 10,
  },

  container: {
    flexDirection: 'column',
    margin: 20,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
    height: 17,
    marginBottom: 40,
    color: '#FFFFFF',
  },

  icon: {
    height: 54,
    width: 52.31,
    backgroundColor: 'FFFFFF',
    alignSelf: 'center',
    marginTop: 40,
  },

  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  forgotText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 50,
  },

  useText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  textinput: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 50,
    alignSelf: 'center',
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  errorText: {
    fontSize: 15,
    color: '#ff0033',
    alignSelf: 'center',
    bottom: 10,
  },

  mpinContainer: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 0,
    height: 50,
    alignSelf: 'center',
    width: '60%',
  },
  eyeicon: {
    height: 24,
    width: 30,
    color: 'grey',
    margin: 2,
  },
});
export default SigninScreen;
