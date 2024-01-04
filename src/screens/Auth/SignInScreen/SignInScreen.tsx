import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert
} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {SignInNavigationProp} from '../../../types/navigation';
import fonts from '../../../theme/fonts';
import theme from '../../../theme/colors';
import {signIn, type SignInInput} from 'aws-amplify/auth';
import { useState } from 'react';



const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();
  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, reset} = useForm<SignInInput>();

  const onSignInPressed = async ({username, password}: SignInInput) => {
    if(loading){ 
      return;
    }
    setLoading(true);

    try {
      const response = await signIn({username, password})
      if(response.nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        navigation.navigate('Confirm email',{username})
      }
      console.log(response)
    }catch (e) {
        Alert.alert('Oops', (e as Error).message)
      
    }finally {
      setLoading(false);
      reset();
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
      <View style={styles.root}>
        <Text style={styles.title}>Welcome back</Text>
        <FormInput
          name="username"
          placeholder="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />


        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: fonts.size.xxlg,
    color: theme.colors.text,
    paddingBottom: 40,
},
});

export default SignInScreen;
