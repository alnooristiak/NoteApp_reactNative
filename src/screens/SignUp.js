import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Inputs from '../components/Inputs'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

const SignUp = ({ navigation }) => {

  const [gender, setGender] = useState(null);

  const genderOptions = ['Male', 'Female'];

  // const selected = true;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.SignUpText}>Never Forget Your Nots</Text>

      {/* Text inpute section email and password  */}
      <View style={styles.textInputSec}>
        <Inputs placeholder='Email Address' />
        <Inputs placeholder='Password' secureTextEntry />

        <TextInput style={styles.textInput} secureTextEntry placeholder='Full Name' />
        <TextInput style={styles.textInput} secureTextEntry placeholder='Age' />

        <View style={{ marginTop: 10, }}>
          {/* Readio Section */}
          {
            genderOptions.map((options) => {
              const selected = options === gender;
              return (
                <Pressable
                  onPress={() => (setGender(options))}
                  key={options}
                  style={styles.readioContainer}
                >
                  <View style={[styles.readioOuter, selected && styles.selectedOuterCircle]}>
                    <View style={[styles.readioInner, selected && styles.selectedInnerCircle]}></View>
                  </View>
                  <Text style={styles.readioText}>{options}</Text>
                </Pressable>
              )
            })}
          {/* Female redio */}
          {/* <Pressable style={styles.readioContainer}>
            <View style={[styles.readioOuter, selected && styles.selectedOuterCircle]}>
              <View style={[styles.readioInner, selected && styles.selectedInnerCircle]}></View>
            </View>
            <Text style={styles.readioText}>female</Text>
          </Pressable>   */}
        </View>
      </View>

      {/* Sign in section BTN  */}
      <Button title={"Sign UP"} customeStyle={{ alignSelf: 'center', marginVertical: 60, }} />

      {/* <View style={styles.dontHAccountSec}> */}
      <Pressable
        onPress={() => { navigation.navigate('SignIn') }}
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
  container: {
    marginTop: 30,

  },
  SignUpIMG: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  SignUpText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInputSec: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'green',
    marginBottom: 20,
  },
  readioContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  readioOuter: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'green',
  },
  readioText: {
    marginLeft: 10,
  },
  // Selected option redio section 
  selectedOuterCircle: {
    borderColor: 'green',
  },
  selectedInnerCircle: {
    backgroundColor: 'green',
  },
  dontHAccountSec: {
    // // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  dontHACpress: {
    flexDirection: 'row',
    alignSelf: 'center',
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // dontHac:{},
  signUp: {
    color: 'green'
  },
  // SignUpIMG:{},
})