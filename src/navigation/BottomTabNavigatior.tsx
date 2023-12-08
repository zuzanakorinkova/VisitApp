import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from '../theme/colors'
import FavouriteScreen from "../screens/Favourites/FavouriteScreen";
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'; 
import HomeStackNavigator from "./HomeStackNavigator";
import FeedStackNavigator from "./FeedStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import { BottomTabNavigatorParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerTitleStyle: {fontSize: 30, fontWeight: '400'}, 
            headerStyle: {backgroundColor: colors.colors.background},
            tabBarShowLabel: false, 
            tabBarActiveTintColor: colors.colors.text}} initialRouteName="Discover">
            <Tab.Screen name="Discover" component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => 
                    <Entypo name="home" size={size} color={color} />
            }} />
            <Tab.Screen name="Feed" component={FeedStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => 
                    <AntDesign name="appstore1" size={size} color={color} />
                }}/>
            <Tab.Screen name="Favourites" component={FavouriteScreen} 
                options={{
                    tabBarIcon: ({color, size}) => 
                    <AntDesign name="heart" size={size} color={color} />
                }}/>
        
            <Tab.Screen name="Profile" component={ProfileStackNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <FontAwesome5 name="user-alt" size={size} color={color} />
            }}
            />
        </Tab.Navigator>
    )
};


export default BottomTabNavigator