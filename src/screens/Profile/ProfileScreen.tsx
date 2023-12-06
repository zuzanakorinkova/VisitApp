import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView/FeedGridView'



const ProfileScreen = ( ) => {
  return (
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
    
  )
}


export default ProfileScreen