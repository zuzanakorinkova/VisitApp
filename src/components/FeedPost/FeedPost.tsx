import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DoublePressable from '../DoublePressable';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {Post} from '../../API';

interface IFeedPost {
  post: Post;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<FeedNavigationProp>();

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  const navigateToUser = () => {
    if (post.User) {
      navigation.navigate('UserProfile', {userId: post.User.id});
    }
  };

  return (
    <View style={styles.post}>
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>
      <View
        style={[
          styles.description,
          {backgroundColor: colors.colors.fadedBackground},
        ]}>
        <Text style={{color: colors.colors.text}}>{post.createdAt}</Text>
        {/* TODO: BLUR EFFECT UNDER DESCRIPTION */}
        <Text style={{color: colors.colors.text, marginTop: 5}}>
          {post.description}
        </Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text
            onPress={navigateToUser}
            style={{
              color: colors.colors.text,
              fontWeight: fonts.weight.semibold,
              fontSize: fonts.size.md,
            }}>
            <Text style={{fontWeight: fonts.weight.normal}}>Posted by</Text>{' '}
            {post.User?.username}
          </Text>
        </View>
        <View style={styles.like}>
          <AntDesign
            onPress={toggleLike}
            name={isLiked ? 'heart' : 'hearto'}
            size={28}
            color={isLiked ? colors.colors.accent : colors.colors.text}
          />
          <Text
            style={{
              color: colors.colors.text,
              marginLeft: 5,
              fontWeight: fonts.weight.semibold,
              opacity: 0.5,
            }}>
            {post.nofLikes}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;
