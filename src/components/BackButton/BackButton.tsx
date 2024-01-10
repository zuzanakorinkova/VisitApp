import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.iconContainer}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={30}
        color={colors.colors.text}
      />
    </View>
  );
};

export default BackButton;
