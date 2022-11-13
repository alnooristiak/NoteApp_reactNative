import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Edit from './src/screens/Edit';
import Create from './src/screens/Create';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { DefaultTheme } from '@react-navigation/native';

// Default theme color change 
const AppTheam = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  }
}


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
