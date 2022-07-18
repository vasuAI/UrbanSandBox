import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../../utils/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import Common from '../../utils/Common';
import {useSelector} from 'react-redux';

const OnBoarding = () => {
  const navigation: any = useNavigation();
  const {
    userDetails: {token},
  } = useSelector((store: any) => store.authReducer);

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigation.navigate(ScreenNames.ADD_CHILD);
      } else {
        navigation.navigate(ScreenNames.LOG_IN);
      }
    }, 100);
    Common.setAuthorizationToken(token);
  }, []);
  return (
    <View>
      <Text>OnBoarding</Text>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
