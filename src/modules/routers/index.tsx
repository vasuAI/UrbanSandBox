import React from 'react';
import HomeScreen from '../home';
import LoginScreen from '../auth/login/Login';
import ScreenNames from '../../utils/ScreenNames';
import OnBoarding from '../splash/Splash';
import BottomTab from '../routers/bottomTAbNavigator';
import SignUpScreen from '../../modules/auth/signup/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import AddChild from '../addChildDetails/addNewChild/AddChild';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.ON_BOARD} component={OnBoarding} />
        <Stack.Screen name={ScreenNames.LOG_IN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.ADD_CHILD} component={AddChild} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen
          name={ScreenNames.FORGET_PASS}
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
