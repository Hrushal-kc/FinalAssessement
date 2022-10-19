import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Button from '../../components/Button';
import UserInput from '../../components/UserInput';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const SignUp = ({navigation}) => {
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
    console.log(values);
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
              <TextInput
                name="mPin"
                placeholder="Re-Enter 4 digit MPin"
                style={styles.textinput}
                onChangeText={handleChange('confirmmPin')}
                onBlur={handleBlur('confirmmPin')}
                value={values.confirmmPin}
                keyboardType="decimal-pad"
                secureTextEntry
              />
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
  },

  errorText: {
    fontSize: 15,
    color: '#ff0033',
    alignSelf: 'center',
    bottom: 10,
  },
});
