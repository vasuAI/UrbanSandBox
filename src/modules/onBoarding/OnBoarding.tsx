import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../../utils/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import Common from '../../utils/Common';
import {useSelector} from 'react-redux';
import {Color, LocalImages} from '../../utils';
import {normalize} from '../../utils/Dimensions';

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
    }, 500);
    Common.setAuthorizationToken(token);
  }, []);

  return (
    <ImageBackground
      source={LocalImages.background2}
      style={styles.parentContainer}>
      <Image source={LocalImages.logo} style={styles.logoIconStyle} />
    </ImageBackground>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.pureWhite,
  },
  logoIconStyle: {
    width: normalize(232),
    height: normalize(195),
  },
});
