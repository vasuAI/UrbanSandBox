import React from 'react';
import HomeScreen from '../home';
import SignUpScreen from '../auth/signup/SignUp';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SignUpScreen">
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
