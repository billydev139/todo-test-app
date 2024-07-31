import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
  Keyboard,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNTextInput from '../../UI/TextInput';
import Button from '../../UI/Button';
import {colors} from '../../UI';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {Register} from '../../Redux/ActionCreator';
import axios from 'axios';

const SignUp: React.FC = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const isLoading = useSelector((state: any) => state.home.RegisterIsLoading);
  const data = useSelector((state: any) => state.home.RegisterData);
  const handleNavigation = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);
  const createValidationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Required'),
    password: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  });
  console.log(isLoading);
  console.log('data', data);
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: createValidationSchema,
      initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
      },
      onSubmit: async data => {
        // Construct the payload with the data from the form
        const payload = {
          userName: data.username,
          email: data.email,
          password: data.password,
        };
        console.log('Payload:', payload); // Log the payload for debugging
        dispatch(Register(payload));
      },
    });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={Platform.select({android: 200})}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Create Account</Text>
        </View>
        <RNTextInput
          value={values.username}
          placeHolder={'user name'}
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
        />
        {errors.username && touched.username && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorTextStyle}>{errors.username}</Text>
          </View>
        )}
        <RNTextInput
          value={values.email}
          placeHolder={'email'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('Email')}
        />
        {errors.email && touched.email && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorTextStyle}>{errors.email}</Text>
          </View>
        )}
        <RNTextInput
          isSecureTextEntry
          placeHolder={'password'}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        {errors.password && touched.password && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorTextStyle}>{errors.password}</Text>
          </View>
        )}
        <RNTextInput
          isSecureTextEntry
          placeHolder={'confirm Password'}
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <View style={styles.errorMessage}>
            <Text style={styles.errorTextStyle}>{errors.confirmPassword}</Text>
          </View>
        )}
        <Button
          loading={isLoading}
          onPress={handleSubmit}
          buttonStyle={styles.btnStyle}
          title={'Register'}
        />
        <View style={styles.signUpRowContainer}>
          <Text style={styles.accountTextStyle}>don't have an account?</Text>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={styles.signUpTextStyle}> Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    height: '35%',
    backgroundColor: colors?.blue,
    borderBottomRightRadius: 150,
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '700',
    color: 'white',
  },

  btnStyle: {
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  signUpRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signUpTextStyle: {
    color: colors?.blue,
    fontWeight: '600',
    fontSize: 14,
  },
  accountTextStyle: {
    fontSize: 14,
    color: colors?.lightBlue,
  },
  errorMessage: {width: '90%', marginHorizontal: '5%'},
  errorTextStyle: {
    color: 'red',
    fontSize: 16,
  },
});
