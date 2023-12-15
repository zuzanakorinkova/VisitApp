import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/Feed/FeedScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { FeedStackNavigatorParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<FeedStackNavigatorParamList>();

const FeedStackNavigator = () => {

    return (
    <Stack.Navigator>
        <Stack.Screen name="FeedStack" component={FeedScreen} options={{headerShown: false}} />
        <Stack.Screen name="UserProfile" component={ProfileScreen} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default FeedStackNavigator;