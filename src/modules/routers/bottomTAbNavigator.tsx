import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Discussion from '../discussion/Discussion';
import ScreenNames from '../../utils/ScreenNames';
import {Image, StyleSheet} from 'react-native';
import {LocalImages} from '../../utils';
import {normalize} from '../../utils/Dimensions';
const Tab = createBottomTabNavigator();

function BottmTabnavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={ScreenNames.HOME}
        component={Discussion}
        options={{
          tabBarStyle: {
            height: normalize(80),
            borderTopLeftRadius: normalize(15),
            borderTopRightRadius: normalize(15),
          },
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.homeActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={LocalImages.homeActiveIcon}
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen name={ScreenNames.BOOKS} component={Discussion} />
      <Tab.Screen name={ScreenNames.WRITING} component={Discussion} />
      <Tab.Screen name={ScreenNames.APPOINTMENTS} component={Discussion} />
      <Tab.Screen name={ScreenNames.MY_BOOKS} component={Discussion} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
  },
});

export default BottmTabnavigator;
