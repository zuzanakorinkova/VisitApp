import {ScrollView, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const PlaceDescription = ({route}: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{route.params.description}</Text>
    </ScrollView>
  );
};

export default PlaceDescription;
