import {Alert} from 'react-native';
import Constants from '../utils/Constants';
import String from './String';

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
const showAlert = (message: string) => {
  return Alert.alert(message);
};

export {showAlert, validateEmail, validatePassword};
