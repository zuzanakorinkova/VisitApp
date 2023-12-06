import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import PostUploadScreen from '../screens/PostUpload/PostUploadScreen';


const Navigation = () => {
return (
    <NavigationContainer theme={DarkTheme}>
        <PostUploadScreen />
    </NavigationContainer>
)
}
export default Navigation;