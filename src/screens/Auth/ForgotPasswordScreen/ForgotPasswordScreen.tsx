import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import fonts from '../../../theme/fonts';
import theme from '../../../theme/colors';

type ForgotPasswordData = {
  username: string;
};

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const onSendPressed = (data: ForgotPasswordData) => {
    console.warn(data);
    navigation.navigate('New password');
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
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
});

export default ForgotPasswordScreen;
