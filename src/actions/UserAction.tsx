import ActionType from './ActionType';

/**
 *
 * @param email
 * @action dispatching email
 * @returns
 */

const emailAction = (email: any) => {
  return (dispatch: Function) => {
    dispatch({type: ActionType.LOGIN_EMAIL, payload: email});
  };
};

/**
 *
 * @param password
 * @action dispatching password
 * @returns
 */
const passwordAction = (password: any) => {
  return (dispatch: Function) => {
    dispatch({type: ActionType.LOGIN_PASSWORD, payload: password});
  };
};

export default {emailAction, passwordAction};
