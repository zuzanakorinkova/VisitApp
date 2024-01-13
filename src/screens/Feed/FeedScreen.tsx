import {View, Text, Image, FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import posts from '../../assets/data/posts.json';
import {useNavigation} from '@react-navigation/native';
import {generateClient} from 'aws-amplify/api';

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        image
        video
        nofLikes
        userID
        createdAt
        updatedAt
        User {
          id
          name
          username
        }
      }
      nextToken
    }
  }
`;

const FeedScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const client = generateClient();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await client.graphql({query: listPosts});
    setPosts(response.data.listPosts.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;
