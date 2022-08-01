import Color from '../../../utils/Color';
import Fonts from '../../../utils/Fonts';
import String from '../../../utils/String';
import {LocalImages} from '../../../utils';
import {
  CustomHeader,
  CustomTextInput,
  CustomActionButton,
} from '../../../components';
import {useDispatch} from 'react-redux';
import {UserAction} from '../../../actions';
import React, {useCallback, useState} from 'react';
import {normalize} from '../../../utils/Dimensions';
import ScreenNames from '../../../utils/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const SignUp = () => {
  const navigation: any = useNavigation();
  const dispatch: Function = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   *
   * @param value
   */
  const onChangeName = useCallback(
    (value: string) => {
      setName(value);
    },
    [name],
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      setEmail(value);
    },
    [email],
  );
  const onChangePassword = useCallback(
    (value: string) => {
      setPassword(value);
    },
    [password],
  );

  const onPressSignup = () => {
    const params = {
      name: name,
      email: email,
      password: password,
      deviceModel: 'iPhone 11',
      deviceToken:
        'cVF_mYxr5k8yvKQveCN1pF:APA91bGJgEdPtsvxQvAd2IUVCGyd4mjoUr1iabM5smv6eelcT10Hw11OHw0WMZQU9BIHmH-rZ5QwdbNrVILzxm4t7zwFbPxJFTd6ba-lZVBy8ArSNWmKlZzU3j3Ax0u0FZVDHD5FU8r7',
      deviceType: 1,
      voipToken: 'E10E2043-DAE2-4263-ADA9-666DB8819A81',
    };

    dispatch(
      UserAction.parentSignUpWithEmail(
        params,
        (success: any) => {
          // setLoader(false);
          success ? (setName(''), setEmail(''), setPassword('')) : null;
          navigation.navigate(ScreenNames.LOG_IN);
        },
        (failure: any) => {
          console.log(
            '🚀 ~ file: Signup.tsx ~ line 68 ~ onPressSignup ~ failure',
            failure,
          );
          // failure ? setLoader(false) : null;
        },
      ),
    );
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.rootContainer}>
      <CustomHeader icon={true} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.headingCon}>
          <Text style={styles.welcomeText}>{String.welcome}</Text>
          <Text style={styles.signupDescription}>
            {String.signupDescription}
          </Text>
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
          value={name}
          onChangeText={onChangeName}
          placeholder={String.name}
          keyboardType={'email-address'}
          leftIcon={LocalImages.nameIcon}
        />
        <CustomTextInput // input email
          value={email}
          onChangeText={onChangeEmail}
          placeholder={String.email}
          keyboardType={'email-address'}
          leftIcon={LocalImages.mailIcon}
        />
        <CustomTextInput // input password
          value={password}
          secureTextEntry={true}
          placeholder={String.pass}
          onChangeText={onChangePassword}
          leftIcon={LocalImages.passwordIcon}
        />

        <CustomActionButton // button signup
          title={String.signup}
          onPress={onPressSignup}
          customContainerStyle={styles.loginButtonCon}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Color.wheat,
  },
  headingCon: {
    marginTop: normalize(15),
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
    color: Color.black,
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
    flex: Platform.OS == 'ios' ? 0.2 : 0.35,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
  errTextSty: {
    color: Color.red,
    marginLeft: normalize(16),
  },
  imageContainer: {
    alignSelf: 'center',
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    marginBottom: normalize(30),
  },
  editIconContainer: {
    color: Color.black,
    top: normalize(200),
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
export default React.memo(SignUp);
