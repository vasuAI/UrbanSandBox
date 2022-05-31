import React from 'react';
import HomeScreen from '../home';
import SignUpScreen from '../auth/signup/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../../utils/ScreenNames';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreenNames.SIGN_UP}>
        <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
