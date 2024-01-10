import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import theme from '../../../../theme/colors';

interface ICustomButton {
  onPress: () => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 20,
    marginVertical: 10,

    alignItems: 'center',
    borderRadius: 50,
  },

  container_PRIMARY: {
    backgroundColor: theme.colors.primary,
  },

  container_SECONDARY: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: theme.colors.primary,
  },

  text_TERTIARY: {
    color: theme.colors.primary,
  },
});

export default CustomButton;
