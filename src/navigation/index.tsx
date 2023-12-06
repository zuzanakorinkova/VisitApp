import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import PostUploadScreen from '../screens/PostUpload/PostUploadScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SinglePlace from '../screens/SinglePlace';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../theme/colors';
import BottomTabNavigator from './BottomTabNavigatior';



const Stack = createNativeStackNavigator(); // (Navigator, Screen)


const Navigation = () => {
return (
    <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default Navigation;