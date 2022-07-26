import Common from '../utils/Common';
import ActionType from './ActionType';
import EndPoint from '../utils/EndPoint';
import WebService from '../utils/WebService';
import {showToast} from '../utils/CommonFunction';

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
