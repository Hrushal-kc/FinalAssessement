import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {signUpUser} from '../../redux/auth';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();

  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [icon, setIcon] = useState('eye-with-line');
  const loginValidationSchema = yup.object().shape({
    MobileNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid Mobile Number')
      .required('Mobile Number is required'),
    mPin: yup
      .string()
      .min(4, ({min}) => `mPin must be at least ${min} characters`)
      .required('mPin is required'),
    confirmmPin: yup
      .string()
      .min(4, ({min}) => `confirmmPin must be at least ${min} characters`)
      .required('confirmmPin is required'),
  });

  const handlePassManagerScreen = values => {
    let data = {
      MobileNumber: values.MobileNumber,
      mPin: values.mPin,
      confirmmPin: values.confirmmPin,
    };
    dispatch(signUpUser(data));
    // navigation.navigate('PassManager');
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
          onSubmit={handlePassManagerScreen}>
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
                placeholder="Enter Mobile Number"
                style={styles.textinput}
                onChangeText={handleChange('MobileNumber')}
                onBlur={handleBlur('MobileNumber')}
                value={values.MobileNumber}
                keyboardType="decimal-pad"
              />

              {errors.MobileNumber && (
                <Text style={styles.errorText}>{errors.MobileNumber}</Text>
              )}
              <TextInput
                name="mPin"
                placeholder="Enter 4 digit MPin"
                style={styles.textinput}
                onChangeText={handleChange('mPin')}
                onBlur={handleBlur('mPin')}
                value={values.mPin}
                keyboardType="decimal-pad"
                secureTextEntry
              />
              {errors.mPin && (
                <Text style={styles.errorText}>{errors.mPin}</Text>
              )}
              <View style={styles.textinput}>
                <TextInput
                  name="mPin"
                  placeholder="Re-Enter 4 digit MPin"
                  style={styles.mpinContainer}
                  onChangeText={handleChange('confirmmPin')}
                  onBlur={handleBlur('confirmmPin')}
                  value={values.confirmmPin}
                  keyboardType="decimal-pad"
                  secureTextEntry={secureTextEntry}
                />
                <Icon
                  style={styles.icon}
                  name={icon}
                  size={25}
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);

                    secureTextEntry ? setIcon('eye-with-line') : setIcon('eye');
                  }}
                />
              </View>
              {errors.confirmmPin && (
                <Text style={styles.errorText}>{errors.confirmmPin}</Text>
              )}
              <Button
                text="Sign IN"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flexDirection: 'column',
    margin: 30,
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
    alignItems: 'center',
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
    height: 50,
    alignSelf: 'center',
    width: '60%',
  },
  icon: {
    height: 24,
    width: 30,
    color: 'grey',
    margin: 2,
  },
});
