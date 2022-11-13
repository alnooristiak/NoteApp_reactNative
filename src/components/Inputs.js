import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputs = ({placeholder, secureTextEntry}) => {
  return (
    <TextInput style={styles.inputStyle} placeholder={placeholder} secureTextEntry={secureTextEntry} />
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