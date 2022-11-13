import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Inputs from '../components/Inputs'

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.SignUpText}>Never Forget Your Nots</Text>

      {/* Text inpute section email and password  */}
      <View style={styles.textInputSec}>
        <Inputs placeholder='Email Address' />
        <Inputs placeholder='Password' secureTextEntry />

        <TextInput style={styles.textInput} secureTextEntry placeholder='Full Name' />
        <TextInput style={styles.textInput} secureTextEntry placeholder='Age' />
      </View>

      {/* Sign in section BTN  */}
      <Button title={"Sign UP"} customeStyle={{alignSelf: 'center', marginVertical: 60,}} />

      {/* <View style={styles.dontHAccountSec}> */}
        <Pressable 
        onPress={() => {navigation.navigate('SignIn')}} 
        style={styles.dontHACpress}
        >
          <Text style={styles.dontHac}>Already Hava an Account? </Text>
          <Text style={styles.signUp}>Sign In.</Text>
        </Pressable>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    
  },
  SignUpIMG:{
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  SignUpText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInputSec:{
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  textInput:{
    borderBottomWidth: 1,
    borderColor: 'green',
    marginBottom: 20,
  },
  dontHAccountSec:{
    // // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  dontHACpress:{
    flexDirection: 'row',
    alignSelf: 'center',
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // dontHac:{},
  signUp:{
    color: 'green'
  },
  // SignUpIMG:{},
})