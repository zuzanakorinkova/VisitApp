import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditProfileScreen from "../screens/EditProfile/EditProfileScreen";
import PostUploadScreen from "../screens/PostUpload/PostUploadScreen";
import { ProfileStackNavigatorParamList } from "./types";


const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {

    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfileStack" component={ProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="PostUpload" component={PostUploadScreen} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default ProfileStackNavigator;