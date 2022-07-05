import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import React from 'react';
const Tab = createBottomTabNavigator();

function BottmTabnavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottmTabnavigator;
