import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Color from '../../../utils/Color';
import Fonts from '../../../utils/Fonts';
import String from '../../../utils/String';
import {LocalImages} from '../../../utils';
import {
  CustomActionButton,
  CustomHeader,
  CustomTextInput,
} from '../../../components';
import {normalize} from '../../../utils/Dimensions';
const SignUp = () => {
  /**
   *
   * @param value
   */
  const onChangeName = (value: string) => {
    console.log(value);
  };

  const onChangeEmail = (value: string) => {
    console.log(value);
  };
  const onChangePassword = (value: string) => {
    console.log(value);
  };

  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.rootContainer}>
      <CustomHeader />
      <View style={styles.headingCon}>
        <Text style={styles.welcomeText}>{String.welcome}</Text>
        <Text style={styles.signupDescription}>{String.signupDescription}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={LocalImages.demoDp}
          style={styles.imageContainer}
          resizeMode="contain"
        />
      </View>
      <View style={styles.editIconContainer}>
        <Image source={LocalImages.editIcon} style={styles.editIconStyle} />
      </View>
      <CustomTextInput // input name
        // value={name}
        onChangeText={onChangeName}
        placeholder={String.name}
        keyboardType={'email-address'}
        leftIcon={LocalImages.nameIcon}
      />
      <CustomTextInput // input email
        // value={email}
        onChangeText={onChangeEmail}
        placeholder={String.email}
        keyboardType={'email-address'}
        leftIcon={LocalImages.mailIcon}
      />
      <CustomTextInput // input password
        // value={password}
        secureTextEntry={true}
        placeholder={String.pass}
        onChangeText={onChangePassword}
        leftIcon={LocalImages.passwordIcon}
      />

      <CustomActionButton // button Login
        title={String.signup}
        // onPress={onLoginPress}
        customContainerStyle={styles.loginButtonCon}
      />
    </ImageBackground>
  );
};
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
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(22),
    marginBottom: normalize(20),
    marginHorizontal: normalize(52),
  },
  spanText: {
    fontWeight: 'bold',
    fontSize: normalize(16),
    color: Color.twilightBlue,
  },
  loginButtonCon: {
    flex: 0.25,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
  errTextSty: {
    color: Color.red,
    marginLeft: normalize(16),
  },
  imageContainer: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    alignSelf: 'center',
    marginBottom: normalize(30),
  },
  editIconContainer: {
    color: Color.black,
    top: normalize(346),
    alignItems: 'center',
    position: 'absolute',
    width: normalize(27),
    left: normalize(210),
    height: normalize(27),
    justifyContent: 'center',
    borderRadius: normalize(50),
    backgroundColor: Color.twilightBlue,
  },
  editIconStyle: {
    width: normalize(13),
    height: normalize(13),
  },
});
export default SignUp;
