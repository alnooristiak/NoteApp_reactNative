import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Inputs from '../components/Inputs'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from '../../App';
import { 
  addDoc,
  collection,
  getDoc,
  doc,
  onSnapshot,
  query,
  where 
} from 'firebase/firestore';



const SignUp = ({ navigation }) => {

  // const auth = getAuth();

  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [fName, setFName] = useState(" ");
  const [age, setAge] = useState(" ");

  // create a new user 
  const signup = async () => {
    try {
      const reasult = await createUserWithEmailAndPassword(auth, email, password);
      await (addDoc, collection(db, 'users'), {
        name: fName,
        email: email,
        age: age,
        gender: gender,
        uid: reasult.user.uid,
      })
      // console.log(reasult);
    } catch (err){
      console.log("OMG We got an error", err)
    }
  };

  // redio gender option
  const genderOptions = ['Male', 'Female'];

  // const selected = true;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.SignUpText}>Never Forget Your Nots</Text>

      {/* Text inpute section email and password  */}
      <View style={styles.textInputSec}>
        <Inputs placeholder='Email Address' onChangeText={(text) => setEmail(text)} />
        <Inputs placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} />

        <TextInput style={styles.textInput} secureTextEntry placeholder='Full Name' onChangeText={(text) => setFName(text)} />
        <TextInput style={styles.textInput} secureTextEntry placeholder='Age' onChangeText={(text) => setAge(text)} />

        <View>
          <Text>Select your Gender</Text>
        </View>
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
      <Button onPress={signup} title={"Sign UP"} customeStyle={{ alignSelf: 'center', marginVertical: 60, }} />

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