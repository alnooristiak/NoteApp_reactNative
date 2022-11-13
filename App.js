// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Edit from './src/screens/Edit';
import Create from './src/screens/Create';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { DefaultTheme } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Default theme color change 
const AppTheam = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  }
}

// Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyDPl1IA4ufXgaeznYYBH_QSzrP7NgkdIiQ",
  authDomain: "note-app-605cf.firebaseapp.com",
  projectId: "note-app-605cf",
  storageBucket: "note-app-605cf.appspot.com",
  messagingSenderId: "585685158312",
  appId: "1:585685158312:web:2cc177b2243a1a1891b59d"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default function App() {

  const Stack = createNativeStackNavigator();

  const user = false; // when are not authenticated

  return (
    <NavigationContainer theme={AppTheam}>
      <Stack.Navigator>
        {
          user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={Create} />
          </>) 
          : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} 
            options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
