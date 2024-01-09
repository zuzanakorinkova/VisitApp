import {View, Text} from 'react-native';
import React from 'react';
import TopTabNavigator from '../../navigation/TopTabNavigator';
import PlacesView from '../../components/PlacesView';
import FeedScreen from '../Feed';
import places from '../../assets/data/places.json';
import posts from '../../assets/data/posts.json';

const FavouriteScreen = () => {
  return (
    <>
      <TopTabNavigator
        left={'15%'}
        TabScreenOne={PlacesView}
        TabScreenTitleOne="Places"
        screenParamsOne={places}
        TabScreenTwo={FeedScreen}
        TabScreenTitleTwo="Posts"
        screenParamsTwo={posts}
      />
    </>
  );
};

export default FavouriteScreen;
