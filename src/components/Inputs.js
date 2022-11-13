import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputs = ({placeholder, secureTextEntry, onChangeText}) => {
  return (
    <TextInput style={styles.inputStyle} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry} />
  )
}

export default Inputs

const styles = StyleSheet.create({
    inputStyle:{
        borderBottomWidth: 1,
        borderColor: 'green',
        marginBottom: 20,
      },
})