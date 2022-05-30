import {Alert} from 'react-native';
import Constants from '../utils/Constants';

function validateEmail(email: any) {
  if (email.length === 0) {
    return 'email address must be enter';
    // return true;
  } else if (Constants.emailRegex.test(email) === false) {
    return 'enter valid email address';
  } else return true;
}
function validatePassword(password: any) {
  if (password.length === 0) {
    return 'Password must be enter';
  } else if (Constants.passwordRegex.test(password) === false) {
    return 'enter valid password';
  } else return true;
}
const showAlert = (message: string) => {
  return Alert.alert(message);
};

export {showAlert, validateEmail, validatePassword};
