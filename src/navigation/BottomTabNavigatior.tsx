import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import FeedScreen from "../screens/Feed/FeedScreen";
import colors from '../theme/colors'
import FavouriteScreen from "../screens/Favourites/FavouriteScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PostUploadScreen from "../screens/PostUpload/PostUploadScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerTitleStyle: {fontSize: 30, fontWeight: '400'}, 
            headerStyle: {backgroundColor: colors.colors.background},
            tabBarShowLabel: false, 
            tabBarActiveTintColor: colors.colors.primary}}>
            <Tab.Screen name="Discover" component={HomeStackNavigator} options={{tabBarIcon: ({color, size}) => <MaterialIcons name="home-filled" size={size} color={color} />}} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="PostUpload" component={PostUploadScreen} options={{headerShown: false}} />
            <Tab.Screen name="Favourites" component={FavouriteScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
};


export default BottomTabNavigator