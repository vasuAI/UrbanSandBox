import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import {
  CustomActionButton,
  CustomHeader,
  CustomTextInput,
} from '../../../components';
import {normalize} from '../../../utils/Dimensions';

export default function ForgetPassword() {
  const onChangeEmail = (value: string) => {
    console.log(value);
  };
  const onSubmitPress = (value: any) => {
    console.log(value);
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.rootContainer}>
      <CustomHeader />
      <View style={styles.headingCon}>
        <Text style={styles.welcomeText}>{String.forgetPass}</Text>
        <Text style={styles.signupDescription}>{String.forgetDescription}</Text>
      </View>
      <CustomTextInput // input email
        // value={email}
        onChangeText={onChangeEmail}
        placeholder={String.email}
        keyboardType={'email-address'}
        leftIcon={LocalImages.mailIcon}
      />

      <CustomActionButton // button submit
        title={String.signup}
        onPress={onSubmitPress}
        customContainerStyle={styles.loginButtonCon}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Color.wheat,
  },
  headingCon: {
    marginTop: normalize(72),
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
