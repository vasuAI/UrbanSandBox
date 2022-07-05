import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../../../utils/Color';
import Fonts from '../../../utils/Fonts';
import String from '../../../utils/String';
import {normalize} from '../../../utils/Dimensions';
import localImage from '../../../utils/LocalImages';
import {
  showAlert,
  onGooglePress,
  validateEmail,
  validatePassword,
  logInWithEmailAndPassword,
} from '../../../utils/CommonFunction';
import {UserAction} from '../../../actions';
import {
  CustomActionButton,
  CustomTextInput,
  CustomHeader,
} from '../../../components';

export default function SignUp() {
  const {email, password} = useSelector((store: any) => store.authReducer);

  const dispatch: Function = useDispatch();
  const statusEmail = validateEmail(email);
  const statusPassword = validatePassword(password);

  /**
   * @description called on login button press
   */
  const onLoginPress = React.useCallback(() => {
    logInWithEmailAndPassword(email, password);

    {
      statusEmail == true && statusPassword == true
        ? showAlert(String.loginSucess)
        : showAlert(String.enterValidCreditials);
    }
  }, [statusEmail, statusPassword]);

  /**
   * @description called onChange email
   */
  const onChangeEmail = useCallback((email: string) => {
    dispatch(UserAction.emailAction(email));
  }, []);

  /**
   * @description called onChange password
   */
  const onChangePassword = useCallback((password: string) => {
    dispatch(UserAction.passwordAction(password));
  }, []);

  /**
   * @description called onPress apple button
   */
  const onApplePress = React.useCallback(() => {}, []);

  /**
   *
   */

  const onPressLoginWithGoogle = React.useCallback(() => {
    onGooglePress(
      (successCallBack: any) => {
        console.log('login Successfull', successCallBack);
      },
      (failureCallback: any) => {
        console.log('Error Message', failureCallback.message);
      },
    );
  }, []);
  return (
    <ImageBackground
      source={localImage.background}
      style={styles.rootContainer}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.headingCon}>
          <Text style={styles.welcomeBackText}>{String.welcomeBack}</Text>
          <Text style={styles.loginAccessText}>{String.loginToAccess}</Text>
        </View>
        <CustomTextInput // input email
          value={email}
          onChangeText={onChangeEmail}
          placeholder={String.email}
          keyboardType={'email-address'}
          leftIcon={localImage.mailIcon}
        />
        {email.length > 0 ? (
          <Text style={styles.errTextSty}>{statusEmail}</Text>
        ) : null}
        <CustomTextInput // input password
          value={password}
          secureTextEntry={true}
          placeholder={String.pass}
          onChangeText={onChangePassword}
          leftIcon={localImage.passwordIcon}
        />
        {password.length > 0 ? (
          <Text style={styles.errTextSty}>{statusPassword}</Text>
        ) : null}
        <Text style={styles.forgetPassText}>{String.forgetPass}</Text>

        <CustomActionButton // button Login
          title={String.login}
          onPress={onLoginPress}
          customContainerStyle={styles.loginButtonCon}
        />
        <CustomActionButton //button apple
          onPress={onApplePress}
          leftIcon={localImage.appleIcon}
          title={String.continueWithApple}
          leftIconStyle={styles.appleIconSty}
        />
        <View style={styles.halfCon}>
          <CustomActionButton //button google
            title={String.google}
            onPress={onPressLoginWithGoogle}
            leftIcon={localImage.googleIcon}
            titleStyle={styles.googleTitleSty}
            leftIconStyle={styles.googleIconSty}
            customContainerStyle={styles.googleContainerSty}
          />
          <CustomActionButton // button facebook
            title={String.facebook}
            onPress={onApplePress}
            leftIcon={localImage.fbIcon}
            leftIconStyle={styles.fbIconSty}
            titleStyle={styles.googleTitleSty}
            customContainerStyle={styles.fbContainerSty}
          />
        </View>
        <Text style={styles.dontHaveAccountText}>
          {String.dontHaveAccount}
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.spanText}>{String.signup}</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
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
  welcomeBackText: {
    alignSelf: 'center',
    fontSize: normalize(30),
    fontFamily: Fonts.pacifico,
  },
  loginAccessText: {
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(22),
    marginBottom: normalize(20),
  },
  forgetPassText: {
    fontWeight: '700',
    marginLeft: 'auto',
    fontSize: normalize(16),
    marginTop: normalize(13),
    lineHeight: normalize(25),
    marginRight: normalize(16),
    marginBottom: normalize(30),
  },
  halfCon: {
    flex: 1,
    flexDirection: 'row',
  },
  dontHaveAccountText: {
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: normalize(16),
    marginTop: normalize(30),
    lineHeight: normalize(22),
  },
  spanText: {
    fontWeight: 'bold',
    fontSize: normalize(16),
    color: Color.twilightBlue,
  },
  loginButtonCon: {
    backgroundColor: Color.twilightBlue,
  },
  googleContainerSty: {
    marginLeft: normalize(16),
    backgroundColor: Color.white,
  },
  fbContainerSty: {
    marginLeft: normalize(-8),
    backgroundColor: Color.white,
  },
  googleTitleSty: {
    color: Color.black,
  },
  googleIconSty: {
    width: normalize(15),
    height: normalize(16),
  },
  appleIconSty: {
    width: normalize(14),
    height: normalize(17),
  },
  fbIconSty: {
    width: normalize(19),
    height: normalize(18),
  },
  errTextSty: {
    color: Color.red,
    marginLeft: normalize(16),
  },
});
