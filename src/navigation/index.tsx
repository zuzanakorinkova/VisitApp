import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  LinkingOptions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigatior';
import {RootNavigator} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator<RootNavigator>(); // (Navigator, Screen)

const linking: LinkingOptions<RootNavigator> = {
  prefixes: ['visit://', 'https://visit.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        screens: {
          Feed: {
            initialRouteName: 'FeedStack',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
          Discover: {
            initialRouteName: 'HomeStack',
            screens: {
              SinglePlace: 'place/:placeId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  const {isSignedIn} = useAuthContext();

  return (
    <NavigationContainer linking={linking} theme={DarkTheme}>
      <Stack.Navigator>
        {!isSignedIn || isSignedIn === undefined ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
