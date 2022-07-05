import React from 'react';
import HomeScreen from '../home';
import LoginScreen from '../auth/Login/Login';
import SignUpScreen from '../auth/Signup/Signup';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from '../routers/bottomTAbNavigator';
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
        initialRouteName={ScreenNames.BOTTOM_TAB}>
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.LOG_IN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
