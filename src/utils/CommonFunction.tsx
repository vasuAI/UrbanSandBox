import String from './String';
import {Alert} from 'react-native';
import {Constants} from '../utils/';
import Auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Snackbar from 'react-native-snackbar';
import Color from './Color';

GoogleSignin.configure({
  webClientId:
    '46024764200-h41clvpeqfgjrdunot281b9vn9ffmsjn.apps.googleusercontent.com',
});
/**
 *
 * @param email
 * @description validate email
 * @returns
 */
function validateEmail(email: any) {
  if (email.length === 0) {
    return String.enterEmailAddress;
  } else if (Constants.emailRegex.test(email) === false) {
    return String.enterValidEmailAddress;
  } else return true;
}

/**
 *
 * @param password
 * @description validate password
 * @returns
 */

function validatePassword(password: any) {
  if (password.length === 0) {
    return String.enterPassword;
  } else if (Constants.passwordRegex.test(password) === false) {
    return String.enterValidPassword;
  } else return true;
}

/**
 *
 * @param message
 * @description shows alert popup
 * @returns
 */
const showAlert = (title: string, message: string, options?: any) => {
  return Alert.alert(title, message, [options]);
};

/**
 *
 * @param successCallback
 * @param failureCallback
 *@description login using google
 */
async function onGooglePress(successCallback: Function, failureCallback: any) {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
    Auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        successCallback(res);
      });
  } catch (error: any) {
    failureCallback(error);
  }
}

/**
 *
 * @param successCallback
 * @param failureCallback
 * @description login with email and password firebase
 */

const logInWithEmailAndPassword = (
  successCallback: any,
  failureCallback: any,
) => {
  Auth()
    .signInWithEmailAndPassword(successCallback, failureCallback)
    .then(successCallback)
    .catch(error => failureCallback(authErrorHandling(error.code)));
};

/**
 *
 * @param toastMessage
 * @returns
 */
const showToast = (message: string) => {
  Snackbar.show({
    text: message,
    duration: 1000,
    textColor: Color.twilightBlue,
    backgroundColor: '#e0e0e0',
  });
};

const authErrorHandling = (errorMsg: any) => {
  switch (errorMsg) {
    case 'auth/wrong-password':
      return 'Wrong email or password.'; //string it
    case 'auth/network-request-failed':
      return 'Network request failed.';
    case 'auth/invalid-email':
      return 'Invalid email.';
    case 'auth/weak-password':
      return 'Weak password.';
    case 'auth/no-current-user':
      return 'No user signed in';
    default:
      break;
  }
};
export {
  showToast,
  showAlert,
  onGooglePress,
  validatePassword,
  validateEmail,
  logInWithEmailAndPassword,
};
