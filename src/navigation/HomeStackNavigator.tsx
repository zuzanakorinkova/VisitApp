import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import SinglePlace from "../screens/SinglePlace";
import { HomeStackNavigatorParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {

    return (
    <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SinglePlace" component={SinglePlace} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default HomeStackNavigator;