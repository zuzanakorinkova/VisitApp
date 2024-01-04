import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {NewPasswordNavigationProp} from '../../../types/navigation';
import theme from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import { confirmResetPassword } from 'aws-amplify/auth';

type NewPasswordType = {
  username: string;
  newPassword: string;
  confirmationCode: string;
};

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm<NewPasswordType>();
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation<NewPasswordNavigationProp>();

  const onSubmitPressed = async({username,newPassword,
    confirmationCode}: NewPasswordType) => {
      
      if(loading){ 
        return;
      }
      setLoading(true);
  
    try {
      await confirmResetPassword({username, newPassword, confirmationCode})
       navigation.navigate('Sign in')
         
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          placeholder="Email"
          name="username"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <FormInput
          placeholder="Code"
          name="confirmationCode"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <FormInput
          placeholder="Enter your new password"
          name="newPassword"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
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
});

export default NewPasswordScreen;
