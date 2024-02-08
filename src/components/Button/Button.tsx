import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface IButton {
  text?: string;
  onPress?: () => void;
  margin?: number;
  color: string;
  backgroundColor: string;
  inline?: boolean;
}

const Button = ({
  text = '',
  onPress = () => {},
  color = '',
  backgroundColor = '',
  margin,
  inline = false,
}: IButton) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          flex: inline ? 1 : undefined,
          backgroundColor: backgroundColor,
          marginLeft: margin,
        },
      ]}
      onPress={onPress}>
      <Text style={{color: color}}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});

export default Button;
