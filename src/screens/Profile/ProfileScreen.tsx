import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView/FeedGridView'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileNavigationProp, MyProfileNavigationProp, MyProfileRouteProp, UserProfileRouteProp } from '../../types/navigation'



const ProfileScreen = ( ) => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>()
  const navigation = useNavigation<ProfileNavigationProp | MyProfileNavigationProp>();
  return (
    <SafeAreaView>
      <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    </SafeAreaView>
    
  )
}


export default ProfileScreen