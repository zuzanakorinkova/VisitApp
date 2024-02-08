import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import FeedPost from '../../components/FeedPost';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {generateClient} from 'aws-amplify/api';
import {useQuery} from '@apollo/client';
import {listPosts} from './queries';
import {ListPostsQuery, ListPostsQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const FeedScreen = () => {
  // const navigation = useNavigation();
  // const client = generateClient();

  // type query in order to see typescript warnings
  const {data, loading, error} = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts);

  // const [posts, setPosts] = useState([]);

  // const fetchPosts = async () => {
  //   const response = await client.graphql({query: listPosts});
  //   setPosts(response.data.listPosts.items);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching posts" message={error.message} />
    );
  }

  const posts = data?.listPosts?.items || [];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => item && <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;
