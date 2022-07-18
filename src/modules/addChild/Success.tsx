import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import {CustomHeader, CustomProgressBar} from '../../components';
import {normalize} from '../../utils/Dimensions';

const Success = () => {
  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.rootContainer}>
      <View style={styles.headingCon}>
        <Text style={styles.welcomeText}>{String.sucess}</Text>
        <Text style={styles.signupDescription}>
          {String.setMpinDescription}
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Color.wheat,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headingCon: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcomeText: {
    color: Color.black,
    alignSelf: 'center',
    fontSize: normalize(30),
    fontFamily: Fonts.pacifico,
  },
  signupDescription: {
    width: '75%',
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(27),
    marginBottom: normalize(20),
    marginHorizontal: normalize(52),
    fontFamily: Fonts.muliSemiBold,
  },
  loginButtonCon: {
    flex: 0.12,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
});
export default React.memo(Success);
