import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import image from './error.png';
import theme from '../../theme/colors';
import Button from '../Button';

interface ApiErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ApiErrorMessage = ({
  title = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},
}: ApiErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <View>
        <Button
          color={theme.colors.danger}
          backgroundColor={theme.colors.background}
          text="Retry"
          onPress={onRetry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 30,
    margin: 20,
    color: theme.colors.text,
  },
  message: {
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 10,
  },
});

export default ApiErrorMessage;
