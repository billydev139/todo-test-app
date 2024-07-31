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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import * as Yup from 'yup';
type RootStackParamList = {
  SignUp: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp',
  'Home'
>;

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const onSignUpPress = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const createValidationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: createValidationSchema,
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: data => {
        navigation.navigate('Home');
      },
    });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={Platform.select({android: 200})}
        contentContainerStyle={{flexGrow: 1}}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>login</Text>
        </View>
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
        <Button
          onPress={handleSubmit}
          buttonStyle={styles.btnStyle}
          title={'login'}
        />
        <View style={styles.signUpRowContainer}>
          <Text style={styles.accountTextStyle}>don't have an account?</Text>
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.signUpTextStyle}> Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleContainer: {
    height: '50%',
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
