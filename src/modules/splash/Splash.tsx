import React, {useEffect} from 'react';
import Common from '../../utils/Common';
import {useSelector} from 'react-redux';
import {Color, LocalImages} from '../../utils';
import {normalize} from '../../utils/Dimensions';
import ScreenNames from '../../utils/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import NetInfoHandler from '../../utils/netinfo/Netinfo';
import {Image, ImageBackground, StyleSheet} from 'react-native';

const Splash = () => {
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
      <NetInfoHandler />
    </ImageBackground>
  );
};

export default React.memo(Splash);

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
