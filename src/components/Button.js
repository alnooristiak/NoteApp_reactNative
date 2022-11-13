import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title, onPress, customeStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, customeStyle]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: 165,
        height: 45,
        borderRadius: 30,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
    }
})