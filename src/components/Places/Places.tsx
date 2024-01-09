import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import {IPlace, ICategory} from '../../types/models';
import {HomeNavigationProp} from '../../types/navigation';

export interface ChildProps {
  place: IPlace;
  category: string | undefined;
}

const Places = ({place, category}: ChildProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [placeCategory, setPlaceCategory] = useState(place.category[0]);
  //console.log(category)

  const toggleLike = () => {
    setIsLiked(v => !v);
  };
  //const handleNavigate = () => {
  // TODO : Figure the likes global state - maybe later in database?s
  //     navigation.navigate("SinglePlace", {id: place.id})
  //   }
  const navigation = useNavigation<HomeNavigationProp>();

  const navigateToPlace = () => {
    navigation.navigate('SinglePlace', {placeId: place.id, place: place});
  };

  // TODO: solve - how to show the place depending on what category are we on here

  if (placeCategory == category) {
    return (
      <Pressable onPress={navigateToPlace} style={styles.wrapper}>
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: place.mainImage}} />
          <Text style={[styles.title, {color: colors.colors.text}]}>
            {place.title}
          </Text>
          <View style={styles.ratingcard}>
            <AntDesign
              onPress={toggleLike}
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              color={isLiked ? colors.colors.accent : colors.colors.text}
            />
            <Text style={[styles.rating, {color: colors.colors.text}]}>
              {place.nofLikes}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
};

export default Places;
