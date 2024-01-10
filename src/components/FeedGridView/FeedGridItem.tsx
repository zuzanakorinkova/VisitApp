import {View, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, padding: 5, aspectRatio: 1, maxWidth: '100%'}}>
      <Image source={{uri: post.image}} style={{flex: 1, borderRadius: 100}} />
    </View>
  );
};

export default FeedGridItem;
