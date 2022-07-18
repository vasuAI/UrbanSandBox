import React from 'react';
import HomeScreen from '../home';
import LoginScreen from '../auth/login/Login';
import SignUpScreen from '../auth/signup/Signup';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from '../routers/bottomTAbNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../../utils/ScreenNames';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';
import AddChild from '../addChild/AddChild';
import BasicDetails from '../addChild/BasicDetails';
import OnBoarding from '../onBoarding/OnBoarding';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={ScreenNames.BOTTOM_TAB}
      >
        <Stack.Screen name={ScreenNames.ON_BOARD} component={OnBoarding} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen
          name={ScreenNames.FORGET_PASS}
          component={ForgetPassword}
        />
        <Stack.Screen name={ScreenNames.LOG_IN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.ADD_CHILD} component={AddChild} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen
          name={ScreenNames.BASIC_DETAILS}
          component={BasicDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
