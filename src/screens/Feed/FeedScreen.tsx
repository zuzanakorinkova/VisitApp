import { View, Text, Image, FlatList } from 'react-native'
import FeedPost from '../../components/FeedPost';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import posts from '../../assets/data/posts.json';




const FeedScreen = () => {
  const {colors} = useTheme()

  return (
    <View style={{flex: 1}}>
      <FlatList data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false} />
    </View>
  )
}

export default FeedScreen