import {ActionType} from './';
import {showToast} from '../utils/CommonFunction';
import {EndPoint, Common, WebService} from '../utils/';

const parentSignUpWithEmail = (
  params: any,
  success: Function,
  fail: Function,
) => {
  return (dispatch: Function) => {
    WebService.postApiCall(
      EndPoint.PARENT_SIGNUP,
      params,
      (response: any) => {
        if (response) {
          const {message, statusCode, result} = response;
          showToast(message);
          if (statusCode == Common.STATUS_CODE.successAction) {
            dispatch({
              type: ActionType.SIGNUP_DETAILS,
              payload: {userDetails: result},
            });
            success(result);
            return;
          }
          success(result);
          return;
        }
        success();
        return;
      },
      (error: any) => {
        fail(error);
      },
    );
  };
};

const parentLoginWithEmail = (
  params: any,
  success: Function,
  fail: Function,
) => {
  return (dispatch: Function, getState: Function) => {
    WebService.postApiCall(
      EndPoint.PARENT_LOGIN,
      params,
      (response: any) => {
        if (response) {
          const {message, statusCode, result} = response;
          showToast(message);
          if (statusCode == Common.STATUS_CODE.success) {
            Common.setAuthorizationToken(result.token);
            dispatch({
              type: ActionType.SIGNUP_DETAILS,
              payload: {userDetails: result},
            });
            success(result);
            return;
          }
          success(result);
          return;
        }
        success();
        return;
      },
      (error: any) => {
        fail(error);
      },
    );
  };
};

export default {parentSignUpWithEmail, parentLoginWithEmail};
