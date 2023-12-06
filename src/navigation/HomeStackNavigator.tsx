import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import SinglePlace from "../screens/SinglePlace";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {

    return (
    <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="SinglePlace" component={SinglePlace} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default HomeStackNavigator;