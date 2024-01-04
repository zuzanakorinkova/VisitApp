import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import fonts from '../../../theme/fonts';
import theme from '../../../theme/colors';
import {resetPassword} from 'aws-amplify/auth';

type ForgotPasswordData = {
  username: string;
};

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const [loading, setLoading] = useState(false);

  const onSendPressed = async ({username}: ForgotPasswordData) => {
     if(loading){ 
      return;
    }
    setLoading(true);

    try {
    const response = await resetPassword({username});
     Alert.alert('Check your email', `The code has been sent to ${response.nextStep.codeDeliveryDetails.destination}`)

     navigation.navigate('New password')
    }catch (e) {
      
      Alert.alert('Oops', (e as Error).message)
      
    }finally {
      setLoading(false)
    }
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
          placeholder="Email"
          rules={{
            required: 'Email is required',
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
