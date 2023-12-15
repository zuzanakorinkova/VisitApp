import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {SignUpNavigationProp} from '../../../types/navigation';
import fonts from '../../../theme/fonts';
import theme from '../../../theme/colors';
import {signUp} from 'aws-amplify/auth';
import { useState } from 'react';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const USERNAME_REGEX = /^[a-zA-Z0-9_]*$/; // alphanumeric and underscore

type SignUpData = {
  name: string;
  username: string;
  preferred_username: string;
  password: string;
  passwordRepeat: string;
};

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm<SignUpData>();
  const pwd = watch('password');
  const navigation = useNavigation<SignUpNavigationProp>();
  const [loading, setLoading] = useState(false)

  const onRegisterPressed = async ({name, username, preferred_username, password}: SignUpData) => {
    if(loading){ 
      return;
    }
    setLoading(true);

    try {
      const response = await signUp({username, password, 
        options: {
          userAttributes: {
            name,
            preferred_username,
          }
        }});
        navigation.navigate('Confirm email', {username});
    } catch (e) {
      Alert.alert('Oops', (e as Error).message)
    }finally {
      setLoading(false)
    }

  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <FormInput
          name="name"
          control={control}
          placeholder="Full name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <FormInput
          name="preferred_username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
            pattern: {
              value: USERNAME_REGEX,
              message: 'Username can only contain a-z, 0-9, _',
            },
          }}
        />
        <FormInput
          name="username"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <FormInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <FormInput
          name="passwordRepeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value: string) =>
              value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text={loading ? "Loading..." : "Sign Up"}
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>


        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: fonts.size.xlg,
    color: theme.colors.text,
    margin: 10,
    paddingBottom: 20,
  },
  text: {
    color: theme.colors.inactive,
    marginVertical: 10,
  },
  link: {
    color: theme.colors.accent,
  },
});

export default SignUpScreen;
