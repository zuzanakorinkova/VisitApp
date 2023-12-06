import { View, Text, Image } from 'react-native'
import React from 'react'
import { IPlace, IPost } from '../../types/models'


const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, padding: 5, aspectRatio: 1, maxWidth: '50%'}} >
      <Image source={{uri: post.image}} style={{flex: 1, borderRadius: 30}} />
    </View>
  )
}

export default FeedGridItem