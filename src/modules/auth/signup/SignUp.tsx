import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Color from '../../../utils/Color';
import Fonts from '../../../utils/Fonts';
import String from '../../../utils/String';
import {normalize} from '../../../utils/Dimensions';
import localImage from '../../../utils/LocalImages';
import {
  showAlert,
  validateEmail,
  validatePassword,
} from '../../../utils/CommonFunction';
import loginBtnAction from '../../../actions/LoginBtnAction';
import Header from '../../../components/customHeader/CustomHeader';
import {CustomActionButton, CustomTextInput} from '../../../components';
export default function SignUp() {
  const dispatch: Function = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLoginBtn = () => {
    dispatch(loginBtnAction(email, password));
  };
  const onPressAppleIDBtn = () => {};
  const onPressFbBtn = () => {};
  const onPressGoogleBtn = () => {};
  const onPressSignUp = () => {};
  const onPressForgetPass = () => {};
  const statusEmail = validateEmail(email);
  const statusPassword = validatePassword(password);
  const onLongPress = React.useCallback(() => {
    {
      statusEmail == true && statusPassword == true
        ? showAlert('Login Sucessfully')
        : showAlert('Enter Valid Creditials');
    }
  }, [statusEmail, statusPassword]);

  const onApplePress = React.useCallback(() => {}, []);
  return (
    <ImageBackground
      source={localImage.background}
      style={styles.rootContainer}>
      <Header />
      <ScrollView>
        <View style={styles.headingCon}>
          <Text style={styles.welcomeBackText}>{String.welcomeBack}</Text>
          <Text style={styles.loginAccessText}>{String.loginToAccess}</Text>
        </View>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder={String.email}
          leftIcon={localImage.mailIcon}
        />
        {email.length > 0 ? (
          <Text style={styles.errTextSty}>{statusEmail}</Text>
        ) : null}
        <CustomTextInput
          value={password}
          secureTextEntry={true}
          placeholder={String.pass}
          onChangeText={setPassword}
          rigtIcon={localImage.eyeIcon}
          rigtHiddenIcon={localImage.fbIcon}
          leftIcon={localImage.passwordIcon}
        />
        {password.length > 0 ? (
          <Text style={styles.errTextSty}>{statusPassword}</Text>
        ) : null}
        <Text onPress={onPressForgetPass} style={styles.forgetPassText}>
          {String.forgetPass}
        </Text>

        <CustomActionButton
          title={String.login}
          onPress={onLongPress}
          customContainerStyle={styles.loginButtonCon}
        />
        <CustomActionButton
          onPress={onApplePress}
          leftIcon={localImage.appleIcon}
          title={String.continueWithApple}
          leftIconStyle={styles.appleIconSty}
        />
        <View style={styles.halfCon}>
          <CustomActionButton
            title={String.google}
            onPress={onApplePress}
            leftIcon={localImage.googleIcon}
            titleStyle={styles.googleTitleSty}
            leftIconStyle={styles.googleIconSty}
            customContainerStyle={styles.googleContainerSty}
          />
          <CustomActionButton
            title={String.fb}
            onPress={onApplePress}
            leftIcon={localImage.fbIcon}
            leftIconStyle={styles.fbIconSty}
            titleStyle={styles.googleTitleSty}
            customContainerStyle={styles.fbContainerSty}
          />
        </View>
        <Text style={styles.dontHaveAccountText}>
          {String.dontHaveAccount}
          <TouchableOpacity activeOpacity={0.7} onPress={onPressSignUp}>
            <Text style={styles.spanText}>{String.signup}</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
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
    backgroundColor: Color.white,
    marginLeft: normalize(-8),
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
    marginLeft: normalize(16),
    color: Color.red,
  },
});
