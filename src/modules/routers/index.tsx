import React from 'react';
import HomeScreen from '../home';
import {ScreenNames} from '../../utils/';
import SplashScreen from '../splash/Splash';
import LoginScreen from '../auth/login/Login';
import BottomTab from '../routers/bottomTAbNavigator';
import SignUpScreen from '../../modules/auth/signup/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import AddChild from '../addChildDetails/AddChild';
import ForgetPassword from '../auth/forgetPassword/ForgetPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.ON_BOARD} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.ADD_CHILD} component={AddChild} />
        <Stack.Screen name={ScreenNames.LOG_IN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen
          name={ScreenNames.FORGET_PASS}
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
