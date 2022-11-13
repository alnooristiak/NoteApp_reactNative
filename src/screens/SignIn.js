import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Inputs from '../components/Inputs'

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>SignIn</Text> */}
      <View>
        <Image style={styles.signInIMG} source={require("../../assets/heroImage.png")} />
      </View>
      <Text style={styles.signInText}>Never Forget Your Nots</Text>

      {/* Text inpute section email and password  */}
      <View style={styles.textInputSec}>
        <Inputs placeholder='Email Address' />
        <Inputs placeholder='Password' secureTextEntry />
      </View>

      {/* Sign in section BTN  */}
      <Button title={"Sign In"} customeStyle={{alignSelf: 'center', marginVertical: 60,}} />

      {/* <View style={styles.dontHAccountSec}> */}
        <Pressable onPress={() => {navigation.navigate('SignUp')}} style={styles.dontHACpress}>
          <Text style={styles.dontHac}>Dont Have an Account? </Text>
          <Text style={styles.signUp}>Sign Up.</Text>
        </Pressable>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    
  },
  signInIMG:{
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  signInText:{
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
  // signInIMG:{},
})