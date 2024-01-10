import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICategory} from '../../types/models';

export interface ChildProps {
  onClick: (name: string | undefined) => void;
  category: ICategory;
}

const TopCategories = ({category, onClick}: ChildProps) => {
  const onCategoryPress = () => {
    onClick(category.name);

    // console.log(category.name)
  };

  const {colors} = useTheme();
  return (
    <View style={[styles.wrapper, {backgroundColor: colors.background}]}>
      <Pressable style={styles.category} onPress={onCategoryPress}>
        <Image style={styles.image} source={{uri: category.image}} />
        <Text style={[styles.name, {color: colors.text}]}>{category.name}</Text>
      </Pressable>
    </View>
  );
};

export default TopCategories;
