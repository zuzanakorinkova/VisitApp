import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

interface IButton {
    text?: string;
    onPress?: () => void
    margin?: number
    color: string
    backgroundColor: string
 }

const Button = ({text = "", onPress = () => {}, color = "", backgroundColor = "", margin}: IButton) => {
  return (
    <Pressable style={[styles.container, {backgroundColor: backgroundColor, marginLeft: margin}]} onPress={onPress}>
      <Text style={{color: color}}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },

})

export default Button