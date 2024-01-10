import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootNavigator = {
    Home: undefined,
    Auth: undefined,
}
export type BottomTabNavigatorParamList = {
    Discover: undefined;
    Feed: undefined;
    Favourites: undefined;
    Profile: undefined;
}
export type MyProfileNavigationProp = BottomTabNavigationProp<BottomTabNavigatorParamList, 'Profile'>

export type MyProfileRouteProp = RouteProp<BottomTabNavigatorParamList, 'Profile'>


export type HomeStackNavigatorParamList = {
    HomeStack: undefined;
    SinglePlace: {place: Object | any, placeId: string}
}
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'HomeStack'>
export type SinglePlaceRouteProp = RouteProp<HomeStackNavigatorParamList, 'SinglePlace'>


export type FeedStackNavigatorParamList = {
    FeedStack: undefined;
    UserProfile: {userId: string};
}
export type FeedNavigationProp = NativeStackNavigationProp<FeedStackNavigatorParamList, 'FeedStack'>

export type UserProfileRouteProp = RouteProp<FeedStackNavigatorParamList, 'UserProfile'>

export type UserProfileNavigationProp = NativeStackNavigationProp<FeedStackNavigatorParamList, 'UserProfile'>

export type ProfileStackNavigatorParamList = {
    ProfileStack: undefined;
    EditProfile: undefined;
    PostUpload: undefined;
}

export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigatorParamList, 'ProfileStack'>



// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
    'Sign in': undefined;
    'Sign up': undefined;
    'Confirm email': {username?: string};
    'Forgot password': undefined;
    'New password': undefined;
  };
  
  export type SignInNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'Sign in'
  >;
  
  export type SignUpNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'Sign up'
  >;
  
  export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'Confirm email'
  >;
  export type ConfirmEmailRouteProp = RouteProp<
    AuthStackNavigatorParamList,
    'Confirm email'
  >;
  
  export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'Forgot password'
  >;
  
  export type NewPasswordNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'New password'
  >;
  