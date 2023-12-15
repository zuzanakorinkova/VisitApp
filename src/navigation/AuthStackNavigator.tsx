import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from '../types/navigation';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ConfirmEmailScreen from '../screens/Auth/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';
import theme from '../theme/colors';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign in"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Sign up" component={SignUpScreen} options={{headerTintColor: theme.colors.accent, headerTitleStyle: {color: theme.colors.inactive}}} />
      <Stack.Screen name="Confirm email" component={ConfirmEmailScreen} options={{headerTintColor: theme.colors.accent, headerTitleStyle: {color: theme.colors.inactive}}}  />
      <Stack.Screen name="Forgot password" component={ForgotPasswordScreen} options={{headerTintColor: theme.colors.accent, headerTitleStyle: {color: theme.colors.inactive}}}  />
      <Stack.Screen name="New password" component={NewPasswordScreen} options={{headerTintColor: theme.colors.accent, headerTitleStyle: {color: theme.colors.inactive}}}  />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
