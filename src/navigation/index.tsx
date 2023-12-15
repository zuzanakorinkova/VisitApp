import React from 'react'
import { NavigationContainer, DarkTheme, LinkingOptions } from '@react-navigation/native';
import PostUploadScreen from '../screens/PostUpload/PostUploadScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SinglePlace from '../screens/SinglePlace';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../theme/colors';
import BottomTabNavigator from './BottomTabNavigatior';
import { RootNavigator } from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';


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
                            UserProfile: 'user/:userId'
                        }
                    },
                    Discover: {
                        initialRouteName: 'HomeStack',
                        screens: {
                            SinglePlace: 'place/:placeId'
                        }
                    }
                }
            }
        }
    }
}

const Navigation = () => {
return (
    <NavigationContainer linking={linking} theme={DarkTheme}>
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Auth" component={AuthStackNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default Navigation;