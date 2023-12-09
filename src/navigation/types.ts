import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootNavigator = {
    Home: undefined,
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